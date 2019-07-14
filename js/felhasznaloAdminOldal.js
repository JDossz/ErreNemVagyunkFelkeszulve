var User = {
  data: [],
  //   init() {
  //     this.getData();
  //   },
  getData() {
    var request = new XMLHttpRequest();
    // a this itt az xmlhttprequest lenne, ezért arrow function-nal kell írni, mert az nem bind-onja a this-t
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        this.callback(request.responseText);
      }
    };
    request.open('GET', '/data/users.json');
    request.send();
  },
  // ezzel töltöm fel a data tömböt, ha a válasz megérkezett
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
    }
    if (isItNew) {
      this.data.push(newUser);
    }
    console.log(this.data);
    // Szilvi vége
  }

};
User.getData();


// +szilvi
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function inputResetButton() {
  document.getElementById('registerForm').reset();
}
// +szilvi vége
