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

function displayErrorNoticeForThreeSeconds() {
  var errorDiv = document.querySelector('.div--error');
  errorDiv.classList.remove('visibilityNone');
  setTimeout(errorAlert, 3000);
}

function errorAlert() {
  var errorDiv = document.querySelector('.div--error');
  errorDiv.classList.add('visibilityNone');
}

function displaySuccessNoticeForThreeSeconds() {
  var successDiv = document.querySelector('.div--newUserSuccess');
  successDiv.textContent = 'Sikeres regisztráció!';
  successDiv.classList.remove('visibilityNone');
  setTimeout(successAlert, 3000);
}

function successAlert() {
  var successDiv = document.querySelector('.div--newUserSuccess');
  successDiv.classList.add('visibilityNone');
}

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
      displayErrorNoticeForThreeSeconds();
      break;
    } else if (emailInputValue !== adminUsers[i].email && passwordInputValue === adminUsers[i].password) {
      errorDiv.textContent = 'Hibás felhasználónév!';
      displayErrorNoticeForThreeSeconds();
      break;
    } else if (emailInputValue !== adminUsers[i].email || emailInputValue === '') {
      errorDiv.textContent = 'Nincs ilyen felhasználó!';
      displayErrorNoticeForThreeSeconds();
      break;
    }
  }
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
  var errorDiv = document.querySelector('.div--error');

  for (var i = 0; i < adminUsers.length; i += 1) {
    if (newEmail.value === adminUsers[i].email) {
      errorDiv.textContent = 'Már van ilyen felhasználó!';
      displayErrorNoticeForThreeSeconds();
      break;
    } else {
      adminUsers.push({
        email: newEmail.value,
        password: newPassword.value
      });
      displaySuccessNoticeForThreeSeconds();
      break;
    }
  }
  newEmail.value = '';
  newPassword.value = '';
}
