document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("footer");

    footer.innerHTML = `
        <footer class="footer">
            <p>&copy; ${new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.</p>
        </footer>
    `;
});



