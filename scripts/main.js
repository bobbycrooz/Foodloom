const header = document.querySelector("header");

window.onscroll = (()=>{
    header.classList.toggle("sticky", pageYOffset > 10)
})