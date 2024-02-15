const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let main = document.querySelector("#main");
let changeMode = document.querySelector("#change-mode");
let navItems = document.querySelectorAll(".navitems");
let navLinks = document.querySelectorAll(".navitems a");
let navItemAnim = document.querySelector(".navitems::after");

let alternate = "white";
changeMode.addEventListener("click",()=> {
    if(alternate==="white"){
        main.style.background = "linear-gradient(to right, #0B1120, #0B1A2D)";
        navItems.forEach((navItemNo)=>{
            navItemNo.style.borderColor = "white";
        })
        navLinks.forEach((navItemNo)=>{
            navItemNo.style.color = "white";
        })
        main.style.color = "white";
        alternate = "black";
    }
    else{
        navItems.forEach((navItemNo)=>{
            navItemNo.style.borderColor = "rgba(0, 0, 0, 0.153)";
        })
        navLinks.forEach((navItemNo)=>{
            navItemNo.style.color = "black";
        })
        main.style.background = "linear-gradient(#efeae3,#efeae3)";
        main.style.color = "black";
        alternate = "white";
    }
    
})
