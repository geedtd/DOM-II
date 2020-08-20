// Your code goes here
let logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', () => {
    logo.style.transform = "scale(1.2)";
})

let navi = document.querySelector(".nav")
let nav = document.querySelectorAll(".nav > a");
navi.addEventListener('mouseover', () => {
    for (i = 0; i < nav.length; i++) {
        nav[i].style.color = "red";
    }
})