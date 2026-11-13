// Html selections
let add = document.querySelector(".Add");
let close = document.querySelector('.close');
let showform = document.querySelector(".showform");
let form = document.querySelector("form")

// Event Listeners
add.addEventListener("click",function(){
    showform.style.display = "initial"
})
close.addEventListener("click",function(){
    showform.style.display = "none";
})