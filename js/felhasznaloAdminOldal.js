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
    console.log(this.data); // ez ír bele a html-be
  },
  remove() {},
  create() {},
  stored() {}

};
User.getData();
