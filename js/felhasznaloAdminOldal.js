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
    request.open('GET', '../data/users.json');
    request.send();
  },
  // ezzel töltöm fel a data tömböt, ha a válasz megérkezett
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
      // nodeButtonEdit.addEventListener('click', edit);
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
  stored() {}

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
