document.getElementById('menuButton').addEventListener('click', function () {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
});