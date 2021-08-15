const hamButton = document.getElementById("ham");
const navLink = document.getElementById('navLinks');



hamButton.addEventListener('click', () => {
    // if(navLink.style.display == "none"){
    //     navLink.style.display = "flex";
    //     console.log("triggered");
    // }
    // else {
    //     navLink.style.display = "none";
    //     console.log("not triggered");
    // }
    if(hamButton.classList.contains("close")){
        hamButton.classList.remove("close");
        navLink.style.display = "flex";
    }
    else{
        hamButton.classList.add("close");
        navLink.style.display = "none";
    }
});