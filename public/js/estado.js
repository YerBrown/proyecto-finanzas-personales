// Funciones de Estado

function activarFila(statusCell, button, row) {
    statusCell.textContent = '1';
    button.textContent = 'Desactivar';
    row.classList.remove('deactivated');
}

function desactivarFila(statusCell, button, row) {
    statusCell.textContent = '0';
    button.textContent = 'Activar';
    row.classList.add('deactivated');
}
