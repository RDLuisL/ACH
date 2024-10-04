document.getElementById("backToTop").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace siga el comportamiento predeterminado
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave hacia arriba
});