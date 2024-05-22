import { BranchApi } from "../api/branchApi.js";
import { BranchModel } from "../model/branchModel.js";

let branchName = $('#branchName');
let productCode = $('#productCode');
let saveBranch = $('#BranchBtn1');

let branchApi = new BranchApi();

/*const loadingScreen = document.querySelector('#loginPage');
const loadingScreen2 = document.querySelector('#registerPage');
const loadingScreen3 = document.querySelector('#dashboardPage');
const loadingScreen4 = document.querySelector('#BranchPage');*/

saveBranch.on('click', (event) => {
    event.preventDefault();

    let branchNameValue = branchName.val();
    let productCodeValue = productCode.val();

    let branchModel = new BranchModel(
        branchNameValue,
        productCodeValue
    )

    branchApi.save(branchModel)
        .then((responseText) => {
            Swal.fire(
                responseText,
                'Successful',
                'success'
            )
            /*loadingScreen.style.display = 'block';
            loadingScreen2.style.display = 'none';
            loadingScreen3.style.display = 'none';
            loadingScreen4.style.display = 'none';*/

            branchName.val('');
            productCode.val('');




        })
        .catch((error) => {
            showError('Save Unsuccessful', error.message);
        });

});

function showError(title, text) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        footer: '<a href="">Why do I have this issue?</a>'
    });
}