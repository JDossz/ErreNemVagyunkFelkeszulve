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
    console.log(this.data);
  },
  remove() {},
  create() {},
  stored() {}

};
User.getData();
