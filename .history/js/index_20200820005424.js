// Your code goes here
let logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', () => {
    logo.style.transform = "scale(1.2)";
})

let nav = document.querySelectorAll("nav > a");
nav.addEventListener('mouseover', () => {
    nav[0].style.color = "red"
    nav[2].style.color = "blue";
})