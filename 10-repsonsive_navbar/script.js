const body = document.querySelector('body');

const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".searchToggle");
const siderbarClose = document.querySelector(".siderbarClose");
const siderbarOpen = document.querySelector(".siderbarOpen");

let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode") {
        body.classList.add("dark") 
    }




//js for light and dark
modeToggle.addEventListener("click",()=>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode","light-mode");
    }else{
        localStorage.setItem("mode","dark-mode");
    }

});




//JS FOR TOGGLE SEARCH BOX

searchToggle.addEventListener("click",()=> {
    searchToggle.classList.toggle("active")
})


//js for toggle sidebar

// siderbarOpen.addEventListener("click",() => {
//     nav.classList.add("active")
// });

siderbarOpen.addEventListener("click",() => {
    nav.classList.add("active");
});

body.addEventListener("click",(e) => {
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("siderbarOpen") 
    && !clickedElm.classList.contains("menu")){
    nav.classList.remove("active");


    }
})