function loadFooter() {
    const footer = `
        <footer>
            <p>© 2025 Mi Proyecto - Todos los derechos reservados</p>
        </footer>
    `;
    document.getElementById("footer").innerHTML = footer;
}

// Llamar a la función cuando se cargue el script
document.addEventListener("DOMContentLoaded", loadFooter);

