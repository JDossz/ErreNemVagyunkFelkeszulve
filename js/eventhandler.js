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
  editButtonEvent(clicked) {
    
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