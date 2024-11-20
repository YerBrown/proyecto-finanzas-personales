// Funciones de Rol

function ascenderUsuario(roleCell, nameCell, button) {
    roleCell.textContent = 'Admin';
    nameCell.classList.add('admin');
    button.textContent = 'Descender';
}

function descenderUsuario(roleCell, nameCell, button) {
    roleCell.textContent = 'Cliente';
    nameCell.classList.remove('admin');
    button.textContent = 'Ascender';
}
