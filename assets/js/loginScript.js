const loadingScreen1 = document.querySelector('#loginPage');
const loadingScreen = document.querySelector('#registerPage');
const loadingScreen3 = document.querySelector('#BranchPage');
const loadingScreen2 = document.querySelector('#dashboardPage');

window.addEventListener('load', function (){
    loadingScreen1.style.display = 'block';
    loadingScreen.style.display = 'none';
    loadingScreen3.style.display = 'none';
});

$(document).ready(function(){
    $('#signUpBtn').eq(0).on('click', function() {
        loadingScreen1.style.display = 'none';
        loadingScreen.style.display = 'block';
        loadingScreen3.style.display = 'none';
        loadingScreen2.style.display = 'none';
    });

    $('#signInBtn').eq(0).on('click', function() {
        loadingScreen1.style.display = 'none';
        loadingScreen.style.display = 'none';
        loadingScreen3.style.display = 'none';
        loadingScreen2.style.display = 'block';
    });
    $('#BranchBtn').eq(0).on('click', function() {
        loadingScreen1.style.display = 'none';
        loadingScreen.style.display = 'none';
        loadingScreen3.style.display = 'block';
        loadingScreen2.style.display = 'none';
    });
    $('#BranchBtn1').eq(0).on('click', function () {
        loadingScreen1.style.display = 'block';
        loadingScreen.style.display = 'none';
        loadingScreen3.style.display = 'none';
        loadingScreen2.style.display = 'none';
    });


})