const despliegue = document.getElementById("despliegue");
const texto = document.getElementById("texto");

despliegue.addEventListener("click", function () {
    texto.style.display = "block";
    despliegue.style.display = "none";
});