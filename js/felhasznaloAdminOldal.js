var User = {
  data: [],

  getData() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        this.callback(request.responseText);
      }
    };
    request.open('GET', '../data/users.json');
    request.send();
  },

  callback(jsonContent) {
    this.data = JSON.parse(jsonContent).users;
    this.showAll();
  },
  showAll() {
    // console.log(this.data); // ez ír bele a html-be

    var nodeTBody = document.querySelector('.usersTable>tbody');
    nodeTBody.textContent = '';

    for (var i = 0; i < this.data.length; i += 1) {
      var nodeTr = document.createElement('tr');
      for (var membername in this.data[i]) {
        var nodeTd = document.createElement('td');
        nodeTd.textContent = this.data[i][membername];
        nodeTr.appendChild(nodeTd);
      }
      var nodeButtonEdit = document.createElement('button');
      nodeButtonEdit.textContent = '✎ Szerkesztés';
      nodeButtonEdit.setAttribute('class', 'button--edit');
      nodeButtonEdit.addEventListener('click', EventHandler.editButtonEvent);
      var nodeButtonDel = document.createElement('button');
      nodeButtonDel.textContent = '❌ Törlés';
      nodeButtonDel.setAttribute('class', 'button--del');
      nodeButtonDel.addEventListener('click', this.remove);
      nodeTr.appendChild(nodeButtonEdit);
      nodeTr.appendChild(nodeButtonDel);
      nodeTBody.appendChild(nodeTr);
    }
  },
  remove() {
    var nodeButtonDel = event.target;
    var nodeTr = nodeButtonDel.parentNode;
    var userID = parseInt(nodeTr.firstElementChild.innerHTML);
    // console.log(userID);
    var user;

    user = (getUserById(userID));
    for (var i = 0; i < User.data.length; i++) {
      if (user === User.data[i]) {
        User.data.splice(i, 1);
        break;
      }
    }
    User.showAll();
  },
  create() {},
  stored() {},

  registerUser() {
    var largestNumber = 0;
    this.data.forEach(el => {
      if (el.id > largestNumber) {
        largestNumber = el.id;
      }
    });
    var registerUserId = largestNumber + 1;
    var registerUserName = document.getElementById('registerUserName').value;
    var registerUserEmailAddress = document.getElementById('registerUserEmailAddress').value;
    var registerUserAddress = document.getElementById('registerUserAddress').value;
    var newUser = {
      id: registerUserId,
      name: registerUserName,
      emailAddress: registerUserEmailAddress,
      address: registerUserAddress
    };
    var isItNew = true;
    for (var i = 0; i < this.data.length; i++) {
      // ellenőrizzük, ha a név már létezik
      if (registerUserName === this.data[i].name) {
        // figyelmeztetés, ha a név foglalt
        alert('Ez a név foglalt, kérlek adj meg egy másikat.');
        isItNew = false;
        // álljon meg, ha true
        break;
        // ellenőrizzük, hogy 1-nél rövoidebb karaktert adtak e meg
      } else if ((registerUserName.length < 2) || (registerUserEmailAddress.length < 2) || (registerUserAddress.length < 1)) {
        // figyelmeztetés, ha a név rövidebb, mint 1 karakter
        alert('A név túl rövid, kérlek adj meg egy másikat.');
        isItNew = false;
        // álljon meg, ha true
        break;
      }

      if (isItNew) {
        this.data.push(newUser);
      }
      console.log(this.data);
      // Szilvi vége
    }
  }
};

User.getData();

function getUserById(userID) {
  var result = null;

  for (var i = 0; i < User.data.length; i++) {
    if (userID === User.data[i].id) {
      result = User.data[i];
      break;
    }
  }
  return result;
}

function inputResetButton() {
  document.getElementById('registerForm').reset();
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
  return result;
};
