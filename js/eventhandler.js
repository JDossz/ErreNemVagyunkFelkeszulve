var EventHandler = {
  tmpName: '',
  tmpMail: '',
  tmpAddress: '',
  addButtonListeners() {
    let leftButtons = document.querySelectorAll('.button--edit');
    let rightButtons = document.querySelectorAll('.button--del');
    for (let i = 0; i < leftButtons.length; i += 1) {
      leftButtons[i].addEventListener('click', this.editButtonEvent);
      rightButtons[i].addEventListener('click', User.remove);
    }
  },
  removeButtonListeners() {
    let leftButtons = document.querySelectorAll('.button--edit');
    let rightButtons = document.querySelectorAll('.button--del');
    for (let i = 0; i < leftButtons.length; i += 1) {
      leftButtons[i].removeEventListener('click', this.editButtonEvent);
      leftButtons[i].removeEventListener('click', this.saveButtonEvent);
      rightButtons[i].removeEventListener('click', this.cancelButtonEvent);
      rightButtons[i].removeEventListener('click', User.remove);
    }
  },
  editButtonEvent() {
    let row = event.target;
    while (row.nodeName !== 'TR') {
      row = row.parentNode;
    }
    let name = row.children[1]
    let mail = row.children[2]
    let address = row.children[3]
    EventHandler.tmpName = row.children[1].innerHTML;
    EventHandler.tmpMail = row.children[2].innerHTML;
    EventHandler.tmpAddress = row.children[3].innerHTML;
    EventHandler.removeButtonListeners();
    row.children[4].addEventListener('click', EventHandler.saveButtonEvent);
    row.children[4].innerHTML = 'Mentés';
    row.children[5].addEventListener('click', EventHandler.cancelButtonEvent);
    row.children[5].innerHTML = 'Visszavonás';
    name.innerHTML = '<input type="text" class="input--edit">';
    name.children[0].value = EventHandler.tmpName;
    mail.innerHTML = '<input type="text" class="input--edit">';
    mail.children[0].value = EventHandler.tmpMail;
    address.innerHTML = '<input type="text" class="input--edit">';
    address.children[0].value = EventHandler.tmpAddress;
  },
  saveButtonEvent() {
    let row = event.target;
    while (row.nodeName !== 'TR') {
      row = row.parentNode;
    }
    row.children[1].innerHTML = row.children[1].children[0].value;
    row.children[2].innerHTML = row.children[2].children[0].value;
    row.children[3].innerHTML = row.children[3].children[0].value;
    row.children[4].innerHTML = '✎ Szerkesztés';;
    row.children[5].innerHTML = '❌ Törlés';
    EventHandler.removeButtonListeners();
    EventHandler.addButtonListeners();
    // TODO: felugróablak
    // Üres validálás
  },
  cancelButtonEvent() {
    let row = event.target;
    while (row.nodeName !== 'TR') {
      row = row.parentNode;
    }
    row.children[1].innerHTML = EventHandler.tmpName;
    row.children[2].innerHTML = EventHandler.tmpMail;
    row.children[3].innerHTML = EventHandler.tmpAddress;
    EventHandler.tmpName = '';
    EventHandler.tmpMail = '';
    EventHandler.tmpAddress = '';
    row.children[4].innerHTML = '✎ Szerkesztés';;
    row.children[5].innerHTML = '❌ Törlés';
    EventHandler.removeButtonListeners();
    EventHandler.addButtonListeners();
    // TODO: felugróablak
  },
};

$(document).ready(function () {
  EventHandler.addButtonListeners();
});