// Funciones de Utilidad

function resetInteractionTimeout(optionsBtn, actionBtns) {
    if (optionsBtn.interactionTimeout) {
        clearTimeout(optionsBtn.interactionTimeout);
    }
    optionsBtn.interactionTimeout = setTimeout(() => {
        actionBtns.style.display = "none";
        optionsBtn.style.display = "inline";
    }, 5000); // Tiempo de espera sin interacción (5 segundos)
}
