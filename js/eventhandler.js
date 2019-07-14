var EventHandler = {
  records: [],
  tmpName: "",
  tmpMail: "",
  tmpAddress: "",
  addEditButtonListeners() {
    $(document).ready(function () {
      $('.button--edit').click(function () {
        let btn = event.currentTarget;
        EventHandler.removeEditButtonListeners();
        EventHandler.editButtonEvent(btn);
      });
    });
  },
  editButtonEvent(row) {
    while (row.nodeName !== 'TR') {
      row = row.parentNode;
    }
    let name = row.children[1];
    let mail = row.children[2];
    let address = row.children[3];
    row.children[4].addEventListener('click', this.saveButtonEvent);
    row.children[5].addEventListener('click', this.cancelButtonEvent);
    EventHandler.tmpName = name.innerHTML;
    EventHandler.tmpMail = mail.innerHTML;
    EventHandler.tmpAddress = address.innerHTML;
    name.innerHTML = '<input type="text" class="input--edit">';
    name.children[0].value = this.tmpName;
    mail.innerHTML = '<input type="text" class="input--edit">';
    mail.children[0].value = this.tmpMail
    address.innerHTML = '<input type="text" class="input--edit">';
    address.children[0].value = this.tmpAddress;
  },
  saveButtonEvent() {

  },
  cancelButtonEvent() {

  },
  removeEditButtonListeners() {
    $(document).ready(function () {
      $('.button--edit').off('click');
    });
  },
  switchToInput(cell) {

  },
  switchToSave(cell) {

  },
  switchToCancel(cell) {

  },
  saveClicked() {

  }
};

EventHandler.addEditButtonListeners();