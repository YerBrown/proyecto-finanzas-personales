// Funciones de Interacción

function toggleOptions(element) {
    const actionBtns = element.nextElementSibling;
    actionBtns.style.display = "flex";
    element.style.display = "none";
    resetInteractionTimeout(element, actionBtns);
}

function toggleActivarDesactivar(event, button) {
    event.preventDefault();
    const row = button.closest('tr');
    const statusCell = row.querySelector('.status');

    if (statusCell.textContent === '1') {
        desactivarFila(statusCell, button, row);
    } else {
        activarFila(statusCell, button, row);
    }

    const optionsBtn = button.closest('.action-container').querySelector('.options-btn');
    resetInteractionTimeout(optionsBtn, button.closest('.action-btns'));
}

function toggleAscenderDescender(event, button) {
    event.preventDefault();
    const row = button.closest('tr');
    const roleCell = row.querySelector('.role');
    const nameCell = row.querySelector('.name');

    if (roleCell.textContent === 'Cliente') {
        ascenderUsuario(roleCell, nameCell, button);
    } else {
        descenderUsuario(roleCell, nameCell, button);
    }

    const optionsBtn = button.closest('.action-container').querySelector('.options-btn');
    resetInteractionTimeout(optionsBtn, button.closest('.action-btns'));
}
