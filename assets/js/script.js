/*

$(document).ready(function() {
    // Initially show the register page
    $('#registerPage').show();
    $('#loginPage').hide();

    window.showLoginPage = function() {
        $('#loginPage').show();
        $('#registerPage').hide();
    }

    window.showRegisterPage = function() {
        $('#loginPage').hide();
        $('#registerPage').show();
    }
});
*/
window.addEventListener('load',function (){
    const loadingScreen = document.querySelector('#registerPage');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('#loginPage');
    loadingScreen1.style.display = 'flex';

    const loadingScreen2 = document.querySelector('#dashboardPage');
    loadingScreen2.style.display = 'none';

});


$(document).ready(function(){
   $('#signUpBtn').eq(0).on('click', function() {
      const loadingScreen = document.querySelector('#loginPage');
      loadingScreen.style.display = 'none';

      const loadingScreen2 = document.querySelector('#registerPage');
      loadingScreen2.style.display = 'block';

      const loadingScreen3 = document.querySelector('#dashboardPage');
      loadingScreen3.style.display = 'none';
   });

    $('#signUpBtn1').eq(0).on('click', function() {
        const loadingScreen = document.querySelector('#loginPage');
        loadingScreen.style.display = 'block';

        const loadingScreen2 = document.querySelector('#registerPage');
        loadingScreen2.style.display = 'none';

        const loadingScreen3 = document.querySelector('#dashboardPage');
        loadingScreen3.style.display = 'none';
    });

    $('#loginBtn').eq(0).on('click', function() {
        const loadingScreen = document.querySelector('#loginPage');
        loadingScreen.style.display = 'none';

        const loadingScreen2 = document.querySelector('#registerPage');
        loadingScreen2.style.display = 'none';

        const loadingScreen3 = document.querySelector('#dashboardPage');
        loadingScreen3.style.display = 'block';
    })
});
