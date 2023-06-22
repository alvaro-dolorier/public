window.onload = function() {
    var ventana = document.getElementById("ventana");
    var cerrar = document.getElementById("cerrar");

    cerrar.onclick = function() {
        ventana.style.display = "none";
    };

    ventana.style.display = "block";
};
