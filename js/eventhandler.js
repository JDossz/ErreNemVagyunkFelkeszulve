var EventHandler = {
  records: [],
  editors: [],
  tmpName: "",
  tmpMail: "",
  tmpAddress: "",
  addEditButtonListeners() {
    this.editors = document.querySelectorAll('.button--edit');
    console.log(this.editors);
    console.log(this.editors.length);
    for (let i = 0; i < this.editors.length; i += 1) {
      this.editors[i].addEventListener('click', this.editButtonEvent);
    }
  },
  editButtonEvent() {
    let row = event.target;
    while (row.nodeName !== 'TR') {
      row = row.parentNode;
    }
    this.removeEditors();
    this.switchToInput(row.children[1]);
    this.switchToInput(row.children[2]);
    this.switchToInput(row.children[3]);
    this.switchToSave(row.children[4]);
    this.switchToCancel(row.children[5]);
  },
  saveButtonEvent() {
    let btn = event.target;
    btn.addEventListener('click', saveClicked);
  },
  cancelButtonEvent() {
    let row = event.target;
    while (row.nodeName !== 'TR') {
      row = row.parentNode;
    }
    row.children[1].innerHTML = this.tmpName;
    row.children[2].innerHTML = this.tmpMail;
    row.children[3].innerHTML = this.tmpAddress;
    this.addEditors();
  },
  removeEditButtonListeners() {
    for (let i = 0; i < this.editors.length; i++) {
      this.editors[i].removeEventListener('click', this.edit);
    }
  },
  switchToInput(cell) {
    let temp = text;
    cell.innerHTML = '<input type="text" class="text--edited">';
    cell.children[0].value = temp;
  },
  switchToSave(cell) {
    cell.textContent = '';
    cell.textContent = 'Mentés';
    cell.addEventListener('click', saveButtonEvent);
  },
  switchToCancel(cell) {
    cell.textContent = '';
    cell.textContent = 'Visszavonás';
    cell.addEventListener('click', this.cancelButtonEvent);
  },
  saveClicked() {
    // ANIMÁCIÓ MAJD
    this.addEditors();
  }
};

EventHandler.addEditButtonListeners();