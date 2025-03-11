document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    navbar.innerHTML = `
        <nav class="navbar">
            <div class="logo">Lista de productos</div>
            <ul class="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div class="menu-toggle">&#9776;</div>
        </nav>
    `;

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

