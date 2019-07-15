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

window.addEventListener('load', windowLoadHandler, false);

function windowLoadHandler() {
  var loginButton = document.querySelector('.button--login-button');
  loginButton.addEventListener('click', loginClickHandler, false);

  var newAdminButton = document.querySelector('.button-new--admin-button');
  newAdminButton.addEventListener('click', adminButtonClickHandler, false);

  var newRegistration = document.querySelector('.button--new-registration-button');
  newRegistration.addEventListener('click', newRegistrationClickHandler, false);
}

var errorDiv = document.querySelector('.div--error');
var successDiv = document.querySelector('.div--new-user-success');
var registration = document.querySelector('.registration');
var login = document.querySelector('.loginInterface');

function loginClickHandler() {
  var emailInputValue = document.querySelector('#emailInput').value;
  var passwordInputValue = document.querySelector('#passwordInput').value;

  for (var i = 0; i < adminUsers.length; i += 1) {
    if (emailInputValue === adminUsers[i].email && passwordInputValue === adminUsers[i].password) {
      window.location = '../html/felhasznaloAdminOldal.html';
      break;
    }
  }

  setTimeout(function haNincsIlyen() {
    for (var j = 0; j < adminUsers.length; j += 1) {
      if (emailInputValue === adminUsers[j].email && passwordInputValue !== adminUsers[j].password) {
        errorDiv.textContent = 'Hibás jelszó!';
      } else if (emailInputValue !== adminUsers[j].email && passwordInputValue === adminUsers[j].password) {
        errorDiv.textContent = 'Hibás felhasználónév!';
      } else {
        errorDiv.textContent = 'Nincs ilyen felhasználó!';
      }
      return displayErrorNoticeForThreeSeconds();
    }
  }, 3000);
}


function adminButtonClickHandler() {
  registration.classList.remove('visibility-none');
  registration.classList.add('visbility');
  login.classList.add('visibility-none');
}

function loginAfterRegistration() {
  registration.classList.remove('visibility');
  registration.classList.add('visibility-none');
  login.classList.remove('visibility-none');
}


function newRegistrationClickHandler() {
  var newEmail = document.querySelector('#newEmailInput');
  var newPassword = document.querySelector('#newPasswordInput');

  for (var i = 0; i < adminUsers.length; i += 1) {
    if (newEmail.value === adminUsers[i].email) {
      errorDiv.textContent = 'Már van ilyen felhasználó!';
      displayErrorNoticeForThreeSeconds();
      break;
    } else if (newEmail.value === '' || newPassword.value === '') {
      errorDiv.textContent = 'Nem maradhat üres mező!';
      displayErrorNoticeForThreeSeconds();
      break;
    } else {
      adminUsers.push({
        email: newEmail.value,
        password: newPassword.value
      });
      displaySuccessNoticeForThreeSeconds();
      newEmail.value = '';
      newPassword.value = '';
      loginAfterRegistration();
      break;
    }
  }
}

function displayErrorNoticeForThreeSeconds() {
  errorDiv.classList.remove('visibility-none');
  setTimeout(errorAlert, 3000);
}

function errorAlert() {
  errorDiv.classList.add('visibility-none');
}

function displaySuccessNoticeForThreeSeconds() {
  successDiv.textContent = 'Sikeres regisztráció!';
  successDiv.classList.remove('visibility-none');
  setTimeout(successAlert, 3000);
}

function successAlert() {
  successDiv.classList.add('visibility-none');
}
