const menu_btn = document.querySelector(".tog");
const nav_bar = document.querySelector(".nav");
const close_btn = document.querySelector(".close");
const body_item = document.querySelectorAll("section");
const list_item = document.querySelectorAll('li');

console.log(body_item)

menu_btn.onclick = (()=>{
    body_item.forEach((item)=>{
        item.classList.toggle("active")
    })
    nav_bar.classList.toggle("active")
    menu_btn.style.display = "none"
    close_btn.style.display = "block"
})

close_btn.onclick = (()=>{
    body_item.forEach((item)=>{
        item.classList.toggle("active")
    })
    nav_bar.classList.toggle("active")
    close_btn.style.display = "none"
    menu_btn.style.display = "block"

   
})


list_item.forEach((item)=>{
    item.onclick = (()=>{
        body_item.forEach((item)=>{
            item.classList.toggle("active")
        })
        nav_bar.classList.toggle("active")
        close_btn.style.display = "none"
        menu_btn.style.display = "block"
    
       
    })
})



const header = document.querySelector("header");

window.onscroll = (()=>{
    header.classList.toggle("sticky", pageYOffset > 10)
})



class TypeSetting {
    constructor(txtElement,words,delay = 300){
        this.txtElement = txtElement;
        this.txt = ' ';
        this.words = words;
        this.delay = delay;
        this.wordIndex = 0;
        this.type();
        this.isDeleting = false;
    }

    type(){
        
       let  currentWordIndex = this.wordIndex %  this.words.length
        let fullTxt = this.words[currentWordIndex]
       let typeSpeed = 500

        if (this.isDeleting){
           this.txt = fullTxt.substring(0, this.txt.length - 1)
        }else{
            
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        // inject txt into element
        this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`
        // reduce typespeed on delling
        if( this.isDeleting){typeSpeed /= 3 }
        // check if txt makes a complete word
        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.delay
            this.isDeleting = true
        }else if(this.isDeleting && this.txt === ""){
            this.isDeleting = false
            this.wordIndex++
        }

        setTimeout(
            ()=>this.type(),typeSpeed
        )
        
    }
}

function init(){
    const txtElement = document.querySelector(".txtElement")
    const words = JSON.parse(txtElement.getAttribute("data-words"))
    const delay = txtElement.getAttribute("data-delay") 

    new TypeSetting(txtElement, words, delay);
}

document.addEventListener('DOMContentLoaded', init)

