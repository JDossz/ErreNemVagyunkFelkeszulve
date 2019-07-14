var WarnGenerator = {
  deleteWarn() {
    let field = document.getElementById('felugroablak');
    emptyClassList(field);
    field.classList.add('red-warn');
    field.classList.add('felugro');
    field.innerHTML = 'Elem törlése sikeres!';
  },
  cancelWarn() {
    let field = document.getElementById('felugroablak');
    emptyClassList(field);
    field.classList.add('yellow-warn');
    field.classList.add('felugro');
    field.innerHTML = 'Elem szerkesztése visszavonva!';
  },
  successWarn() {
    let field = document.getElementById('felugroablak');
    emptyClassList(field);
    field.classList.add('green-warn');
    field.classList.add('felugro');
    field.innerHTML = 'Elem szerkesztése sikeres!';
  },
};