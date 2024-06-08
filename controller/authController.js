import {SignInModel} from '../model/signInModel.js';
import {SignUpModel} from '../model/signUpModel.js';
import {AuthApi} from "../api/authApi.js";
import {BranchApi} from "../api/branchApi.js";


const email = $('#username');
const password = $('#password');
const signInButton = $('#loginBtn');
const signUpButton = $('#signUpBtn1');
const username=$('#username1');
const password1=$('#password1');
const role = $('#roleId')
const branch=$('#signup-branch');


const authApi = new AuthApi();
const branchApi = new BranchApi();
let globalToken = null;

/*const loadingScreen = document.querySelector('#loginPage');
const loadingScreen2 = document.querySelector('#registerPage');
const loadingScreen3 = document.querySelector('#dashboardPage');
const loadingScreen4 = document.querySelector('#setBranchPage');
const loadingScreen5 = document.querySelector('#sidenav');*/


function populateBranchComboBox() {
    branchApi.getAllBranch()
        .then((responseText) => {
            console.log(responseText);
            responseText.forEach((branch) => {
                $('#signup-branch').append(
                    `<option value="${branch.branchId}">${branch.branchName}</option>`
                );
            });
        })
        .catch((error) => {
            console.log(error);
            showError('fetch Unsuccessful', error);
        });
}

populateBranchComboBox();
signInButton.on('click', (event) => {

    console.log('SignIn clicked');
    event.preventDefault();
    const signInModel = new SignInModel(email.val(), password.val());
    authApi.signIn(signInModel).then((response) => {
        /*globalToken = response.token;

        localStorage.setItem('authToken',globalToken);*/
        document.cookie = "username=" + email.val() + "; path=/";
        document.cookie = "token=" + response+";path=/";
        console.log(globalToken);
        Swal.fire({
            icon: 'success',
            title: 'Signed Up Successfully!',
            text: 'Welcome to HelloShoeShop!',
            footer: '<a href="">Proceed to Dashboard</a>',
            showConfirmButton: false,
            timer: 3000,
        }).then(()=>{
            window.location.href = "index.html"
        });

        email.val('');
        password.val('');


    }).catch(error => showError('Log In Unsuccessful', error.message)
    );
});

signUpButton.on('click', (event) => {
    event.preventDefault();
    const signUpModel = new SignUpModel(username.val(), password1.val() ,role.val(),branch.val());

        authApi.signUp(signUpModel)
            .then(response => {
                globalToken = response.token;
                console.log(globalToken);
                Swal.fire({
                    icon: 'success',
                    title: 'Signed Up Successfully!',
                    text: 'Welcome to HelloShoeShop!',
                    footer: '<a href="">Proceed to Dashboard</a>',
                    showConfirmButton: false,
                    timer: 3000,
                });
            })
            .catch(error => showError('Sign Up Unsuccessful', error.message));
});


function showError(title, text) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        footer: '<a href="">Why do I have this issue?</a>'
    });


}