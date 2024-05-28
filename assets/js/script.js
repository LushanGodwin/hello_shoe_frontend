const loadingScreen = document.querySelector('#registerPage');
const loadingScreen1 = document.querySelector('#loginPage');
const loadingScreen2 = document.querySelector('#dashboardPage');
const loadingScreen3 = document.querySelector('#BranchPage');
const loadingScreen4 = document.querySelector('#employeePage');
const loadingScreen5 = document.querySelector('#productPage');
const loadingScreen6 = document.querySelector('#orderPage');
const loadingScreen7 = document.querySelector('#customerPage');
const loadingScreen8 = document.querySelector('#supplierPage');
const loadingScreen9 = document.querySelector('#stockPage');
const components = document.querySelector('#dashboardComponents');
const components1 = document.querySelector('#employeeSection');
const components2 = document.querySelector('#productSection');
const components3 = document.querySelector('#orderSection');
const components4 = document.querySelector('#customerSection');
const components5 = document.querySelector('#supplierSection');
const components6 = document.querySelector('#stockSection');

window.addEventListener('load',function (){
    loadingScreen.style.display = 'none';
    loadingScreen1.style.display = 'flex';
    loadingScreen2.style.display = 'none';
    loadingScreen3.style.display = 'none';
    loadingScreen4.style.display = 'none';
    loadingScreen7.style.display = 'none';


});


$(document).ready(function(){
   $('#signUpBtn').eq(0).on('click', function() {
      loadingScreen1.style.display = 'none';
      loadingScreen.style.display = 'block';
      loadingScreen2.style.display = 'none';
      loadingScreen3.style.display = 'none';
      loadingScreen4.style.display = 'none';
      loadingScreen7.style.display = 'none';


   });

    $('#signUpBtn1').eq(0).on('click', function() {
        loadingScreen1.style.display = 'block';
        loadingScreen.style.display = 'none';
        loadingScreen2.style.display = 'none';
        loadingScreen3.style.display = 'none';
        loadingScreen4.style.display = 'none';
        loadingScreen7.style.display = 'none';

    });


    $('#BranchBtn').eq(0).on('click', function() {
        loadingScreen1.style.display = 'none';
        loadingScreen.style.display = 'none';
        loadingScreen2.style.display = 'none';
        loadingScreen3.style.display = 'block';
        loadingScreen4.style.display = 'none';
        loadingScreen7.style.display = 'none';

    });

    $('#BranchBtn1').eq(0).on('click', function() {
        loadingScreen1.style.display = 'block';
        loadingScreen.style.display = 'none';
        loadingScreen2.style.display = 'none';
        loadingScreen3.style.display = 'none';
        loadingScreen4.style.display = 'none';
        loadingScreen7.style.display = 'none';

    });

    $('#employee').eq(0).on('click', function() {
        loadingScreen4.style.display = 'block';
        components.style.display = 'none';
        components1.style.display = 'none';
        components2.style.display = 'none';
        components3.style.display = 'none';
        components4.style.display = 'none';
        components5.style.display = 'none';
        components6.style.display = 'none';
    })

    $('#customers').eq(0).on('click', function() {
        loadingScreen7.style.display = 'block';
        components.style.display = 'none';
        components1.style.display = 'none';
    })
});




