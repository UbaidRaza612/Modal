console.log("Starting");


let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal");


btn.addEventListener("click",() =>{
    console.log("Clicked");
    modal.style.display = "flex";
});

let cancel = document.querySelector(".cancel");

cancel.addEventListener("click",() =>{
    console.log("Cancelled");
    modal.style.display = "none";

    
})