var WarnGenerator = {
  deleteWarn() {
    let field = document.getElementById('felugroablak');
    WarnGenerator.emptyClassList(field);
    field.classList.add('red-warn');
    field.classList.add('felugro');
    field.innerHTML = 'Elem törlése sikeres!';
    setTimeout(function () {
      WarnGenerator.emptyClassList(field);
    }, 3000);
  },
  cancelWarn() {
    let field = document.getElementById('felugroablak');
    WarnGenerator.emptyClassList(field);
    field.classList.add('yellow-warn');
    field.classList.add('felugro');
    field.innerHTML = 'Elem szerkesztése visszavonva!';
    setTimeout(function () {
      WarnGenerator.emptyClassList(field);
    }, 3000);
  },
  successWarn() {
    let field = document.getElementById('felugroablak');
    WarnGenerator.emptyClassList(field);
    field.classList.add('green-warn');
    field.classList.add('felugro');
    field.innerHTML = 'Elem szerkesztése sikeres!';
    setTimeout(function () {
      WarnGenerator.emptyClassList(field);
    }, 3000);
  },
  emptyClassList(field) {
    for (let i = 0; i < field.classList.length; i += 1) {
      field.classList.remove(field.classList[i]);
    }
  }
};
