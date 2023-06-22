function toggleModoOscuro() {
    const body = document.body;
    const boton = document.getElementsByTagName("button")[0];

    body.classList.toggle("modo-oscuro");

    if (body.classList.contains("modo-oscuro")) {
        boton.textContent = "desactivar modo oscuro";
    } else {
        boton.textContent = "Activar modo oscuro";
    }
}