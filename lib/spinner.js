document.addEventListener("DOMContentLoaded", function () {
    // Muestra el spinner al cargar la página
    const spinner = document.getElementById('spinner');
    setTimeout(() => {
        // Oculta el spinner después de 1 segundo (1000 ms)
        spinner.style.display = 'none';
    }, 5000);
});