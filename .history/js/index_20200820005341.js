// Your code goes here
let logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', () => {
    logo.style.transform = "scale(1.2)";
})

let nav = document.querySelector("nav > a");
nav.addEventListener('mouseover', () => {
    nav.style.color = "red"
})