const acordeon = document.getElementById("acordeon");
const letras = document.getElementById("letras");

acordeon.addEventListener("click", function () {
    letras.style.display = "block";
    acordeon.style.display = "none";
});