const toggler = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

toggler.addEventListener("click",()=>{
    navbar.classList.toggle("navbar-expanded");
});