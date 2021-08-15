const hamButton = document.getElementById("ham");
const navLink = document.getElementById('navLinks');

hamButton.addEventListener('click', () => {
    if(navLink.style.display == "none"){
        navLink.style.display = "flex";
    }
    else {
        navLink.style.display = "none";
    }
});