document.addEventListener("DOMContentLoaded", function () {
    function generarFooter() {
        return `
            <footer class="footer">
                <div class="footer-content">
                    <p>&copy; ${new Date().getFullYear()} El proyecto de Luis. Todos los derechos reservados.</p>
                    <ul class="footer-links">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                    </ul>
                </div>
            </footer>
        `;
    }

    // Insertar el footer dinámicamente
    const footer = document.getElementById("footer");
    if (footer) {
        footer.innerHTML = generarFooter();
    }
});




