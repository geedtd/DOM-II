// Your code goes here
let logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', () => {
    logo.style.transform = "scale(1.2)";
})

let nav = document.querySelectorAll("nav > a");
nav.addEventListener('mouseover', () => {
    nav[0].style.color = "red";
    // for (i = 0; i < nav.length; i++) {
    //     nav[i].style.color = "red";
    }
})