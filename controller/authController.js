import {SignInModel} from '../model/signInModel.js';
import {AuthApi} from "../api/authApi.js";


const email = $('#username');
const password = $('#password');
const signInButton = $('#loginBtn');
const signUpForm = $('#signUpForm');


const authApi = new AuthApi();
let globalToken = null;

const loadingScreen = document.querySelector('#loginPage');
const loadingScreen2 = document.querySelector('#registerPage');
const loadingScreen3 = document.querySelector('#dashboardPage');

signInButton.on('click', (event) => {

    console.log('SignIn clicked');
    event.preventDefault();
    const signInModel = new SignInModel(email.val(), password.val());
    authApi.signIn(signInModel).then((response) => {
        globalToken = response.token;
        console.log(globalToken);
        /*Swal.fire({
            icon: 'success',
            title: 'Signed Up Successfully!',
            text: 'Welcome to HelloShoeShop!',
            footer: '<a href="">Proceed to Dashboard</a>',
            showConfirmButton: false,
            timer: 3000,
        });
        signUpForm[0].reset();*/

        loadingScreen.style.display = 'none';

        loadingScreen2.style.display = 'none';

        loadingScreen3.style.display = 'block';
        email.val('');
        password.val('');


    }).catch(error => showError('Log In Unsuccessful', error.message));
});


function showError(title, text) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        footer: '<a href="">Why do I have this issue?</a>'
    });


}