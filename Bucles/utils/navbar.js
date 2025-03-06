function loadNavbar() {
    const navbar = `
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="about.html">Acerca de</a></li>
                <li><a href="contact.html">Contacto</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("navbar").innerHTML = navbar;
}

// Llamar a la función cuando se cargue el script
document.addEventListener("DOMContentLoaded", loadNavbar);

