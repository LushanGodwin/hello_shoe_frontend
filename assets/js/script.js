const loadingScreen2 = document.querySelector('#dashboardPage');
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
    loadingScreen2.style.display = 'block';
    loadingScreen4.style.display = 'none';
    loadingScreen5.style.display = 'none';
    loadingScreen6.style.display = 'none';
    loadingScreen7.style.display = 'none';
    loadingScreen8.style.display = 'none';
    loadingScreen6.style.display = 'none';
    loadingScreen9.style.display = 'none';
});


$(document).ready(function(){
   /*$('#signUpBtn').eq(0).on('click', function() {
      loadingScreen1.style.display = 'none';
      loadingScreen.style.display = 'block';
      loadingScreen2.style.display = 'none';
      loadingScreen3.style.display = 'none';
      loadingScreen4.style.display = 'none';
      loadingScreen5.style.display = 'none';
      loadingScreen6.style.display = 'none';
      loadingScreen7.style.display = 'none';
      loadingScreen8.style.display = 'none';
      loadingScreen9.style.display = 'none';


   });*/

    /*$('#signUpBtn1').eq(0).on('click', function() {
        loadingScreen1.style.display = 'block';
        loadingScreen.style.display = 'none';
        loadingScreen2.style.display = 'none';
        loadingScreen3.style.display = 'none';
        loadingScreen4.style.display = 'none';
        loadingScreen5.style.display = 'none';
        loadingScreen6.style.display = 'none';
        loadingScreen7.style.display = 'none';
        loadingScreen8.style.display = 'none';
        loadingScreen9.style.display = 'none';
    });*/


    /*$('#BranchBtn').eq(0).on('click', function() {
        loadingScreen1.style.display = 'none';
        loadingScreen.style.display = 'none';
        loadingScreen2.style.display = 'none';
        loadingScreen3.style.display = 'block';
        loadingScreen4.style.display = 'none';
        loadingScreen5.style.display = 'none';
        loadingScreen6.style.display = 'none';
        loadingScreen7.style.display = 'none';
        loadingScreen8.style.display = 'none';
        loadingScreen9.style.display = 'none';

    });*/

    /*$('#BranchBtn1').eq(0).on('click', function() {
        loadingScreen1.style.display = 'block';
        loadingScreen.style.display = 'none';
        loadingScreen2.style.display = 'none';
        loadingScreen3.style.display = 'none';
        loadingScreen4.style.display = 'none';
        loadingScreen5.style.display = 'none';
        loadingScreen6.style.display = 'none';
        loadingScreen7.style.display = 'none';
        loadingScreen8.style.display = 'none';
        loadingScreen9.style.display = 'none';

    });*/

    $('#dashboard').eq(0).on('click', function() {
       components.style.display = 'block';
       components1.style.display = 'none';
        components2.style.display = 'none';
        components3.style.display = 'none';
        components4.style.display = 'none';
        components5.style.display = 'none';
        components6.style.display = 'none';
    });

    $('#employee').eq(0).on('click', function() {
        loadingScreen4.style.display = 'block';
        components.style.display = 'none';
        components1.style.display = 'block';
        components2.style.display = 'none';
        components3.style.display = 'none';
        components4.style.display = 'none';
        components5.style.display = 'none';
        components6.style.display = 'none';
    });

    $('#customers').eq(0).on('click', function() {
        loadingScreen7.style.display = 'block';
        components.style.display = 'none';
        components1.style.display = 'none';
        components2.style.display = 'none';
        components3.style.display = 'none';
        components4.style.display = 'block';
        components5.style.display = 'none';
        components6.style.display = 'none';
    });

    $('#product').eq(0).on('click', function() {
        loadingScreen5.style.display = 'block';
        components.style.display = 'none';
        components1.style.display = 'none';
        components2.style.display = 'block';
        components3.style.display = 'none';
        components4.style.display = 'none';
        components5.style.display = 'none';
        components6.style.display = 'none';
    });

    $('#order').eq(0).on('click', function() {
        loadingScreen6.style.display = 'block';
        components.style.display = 'none';
        components1.style.display = 'none';
        components2.style.display = 'none';
        components3.style.display = 'block';
        components4.style.display = 'none';
        components5.style.display = 'none';
        components6.style.display = 'none';
    });

    $('#suppliers').eq(0).on('click', function() {
        loadingScreen8.style.display = 'block';
        components.style.display = 'none';
        components1.style.display = 'none';
        components2.style.display = 'none';
        components3.style.display = 'none';
        components4.style.display = 'none';
        components5.style.display = 'block';
        components6.style.display = 'none';
    });

    $('#stock').eq(0).on('click', function() {
        loadingScreen9.style.display = 'block';
        components.style.display = 'none';
        components1.style.display = 'none';
        components2.style.display = 'none';
        components3.style.display = 'none';
        components4.style.display = 'none';
        components5.style.display = 'none';
        components6.style.display = 'block';
    });

    $('#logout').eq(0).on('click', function() {
       loadingScreen1.style.display = 'block';
       loadingScreen.style.display = 'none';
       loadingScreen2.style.display = 'none';
       loadingScreen3.style.display = 'none';
       loadingScreen4.style.display = 'none';
       loadingScreen5.style.display = 'none';
       loadingScreen6.style.display = 'none';
       loadingScreen7.style.display = 'none';
       loadingScreen8.style.display = 'none';
       loadingScreen9.style.display = 'none';

    });
});


let countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
    "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
    "Zimbabwe"
];





