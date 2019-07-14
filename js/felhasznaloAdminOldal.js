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
    // WarnGenerator.deleteWarn();
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