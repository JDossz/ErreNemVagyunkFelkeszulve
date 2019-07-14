var User = {
  data: [],

  getData() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        this.callback(request.responseText);
      }
    };
    request.open('GET', '/data/users.json');
    request.send();
  },

  callback(jsonContent) {
    this.data = JSON.parse(jsonContent).users;
    this.showAll();
  },
  showAll() {
    // ez ír bele a html-be
  },
  remove() {},
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

    User.showAll();
    console.log(this.data);
  }

};
User.getData();


// +szilvi
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
  return result;
}
;
