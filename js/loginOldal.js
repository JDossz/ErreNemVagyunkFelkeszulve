var adminUsers = [{
  email: 'tamas.takacs@gmail.com',
  password: 'Tomi@88'
},
{
  email: 'rebeka.grosics@gmail.com',
  password: 'Rebeka@9'
},
{
  email: 'daniel.olah@gmail.com',
  password: 'Olah@6'
},
{
  email: 'dorottya.juhasz@gmail.com',
  password: 'Dorka@42'
},
{
  email: 'szilvia.horvath@gmail.com',
  password: 'Szilvi@3'
}
];


// ha az felhasználó input mező és pw mező értéke típusosan-azonosan egyenlő, akkor vigyen át a felhaszanloAdminOldal.html-re
var loginButton = document.querySelector('.loginButton');
loginButton.addEventListener('click', loginClickHandler, false);

function loginClickHandler() {
  var emailInputValue = document.querySelector('#emailInput').value;
  var passwordInputValue = document.querySelector('#passwordInput').value;
  var errorDiv = document.querySelector('.div--error');

  for (var i = 0; i < adminUsers.length; i += 1) {
    if (emailInputValue === adminUsers[i].email && passwordInputValue === adminUsers[i].password) {
      window.location = '../html/felhasznaloAdminOldal.html';
      break;
    } else if (emailInputValue === adminUsers[i].email && passwordInputValue !== adminUsers[i].password) {
      errorDiv.textContent = 'Hibás jelszó!';
      errorDiv.classList.remove('visibilityNone');
      break;
    } else if (emailInputValue !== adminUsers[i].email && passwordInputValue === adminUsers[i].password) {
      errorDiv.textContent = 'Hibás felhasználónév!';
      errorDiv.classList.remove('visibilityNone');
      break;
    } else if (emailInputValue !== adminUsers[i].email || emailInputValue === '') {
      errorDiv.textContent = 'Nincs ilyen felhasználó!';
      errorDiv.classList.remove('visibilityNone');
      break;
    }
  }
}

function closeNotification() {
  var errorDiv = document.querySelector('.div--error');
  errorDiv.classList.add('visibilityNone');
}

var newAdminButton = document.querySelector('.newAdminButton');
newAdminButton.addEventListener('click', adminButtonClickHandler, false);

function adminButtonClickHandler() {
  var registration = document.querySelector('.registration');
  var login = document.querySelector('.loginInterface');

  registration.classList.remove('visibilityNone');
  registration.classList.add('visbility');
  login.classList.add('visibilityNone');
}

var newRegistration = document.querySelector('.newRegistrationButton');
newRegistration.addEventListener('click', newRegistrationClickHandler, false);

function newRegistrationClickHandler() {
  var newEmail = document.querySelector('#newEmailInput');
  var newPassword = document.querySelector('#newPasswordInput');


  for (var i = 0; i < adminUsers.length; i += 1) {
    if (newEmail.value === adminUsers[i].email) {
      alert('Már van ilyen felhasználó');
      break;
    } else {
      adminUsers.push({
        email: newEmail.value,
        password: newPassword.value
      });
      break;
    }
  }
  newEmail.value = '';
  newPassword.value = '';
}
