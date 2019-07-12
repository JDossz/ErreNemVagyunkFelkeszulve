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

  for (var i = 0; i < adminUsers.length; i += 1) {
    if (emailInputValue === adminUsers[i].email && passwordInputValue === adminUsers[i].password) {
      window.location = '../html/felhasznaloAdminOldal.html';
      break;
    } else if (emailInputValue === adminUsers[i].email && passwordInputValue !== adminUsers[i].password) {
      alert('Hibás jelszó');
    } else if (emailInputValue !== adminUsers[i].email && passwordInputValue === adminUsers[i].password) {
      alert('Hibás felhasználónév');
    } else if (emailInputValue !== adminUsers[i].email || emailInputValue === '') {
      alert('Nincs ilyen felhasználó');
      break;
    }
  }
}
