var adminUsers = [
  {
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
  errorDiv.classList.remove('visibility-none');
  setTimeout(errorAlert, 3000);
}

function errorAlert() {
  var errorDiv = document.querySelector('.div--error');
  errorDiv.classList.add('visibility-none');
}

function displaySuccessNoticeForThreeSeconds() {
  var successDiv = document.querySelector('.div--new-user-success');
  successDiv.textContent = 'Sikeres regisztráció!';
  successDiv.classList.remove('visibility-none');
  setTimeout(successAlert, 3000);
}

function successAlert() {
  var successDiv = document.querySelector('.div--new-user-success');
  successDiv.classList.add('visibility-none');
}

// ha a felhasználó input mező és pw mező értéke típusosan-azonosan egyenlő, akkor vigyen át a felhaszanloAdminOldal.html-re
var loginButton = document.querySelector('.button--login-button');
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


var newAdminButton = document.querySelector('.button-new--admin-button');
newAdminButton.addEventListener('click', adminButtonClickHandler, false);

function adminButtonClickHandler() {
  var registration = document.querySelector('.registration');
  var login = document.querySelector('.loginInterface');

  registration.classList.remove('visibility-none');
  registration.classList.add('visbility');
  login.classList.add('visibility-none');
}

var newRegistration = document.querySelector('.button--new-registration-button');
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
