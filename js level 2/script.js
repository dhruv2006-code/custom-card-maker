//All Variables And Html selections
let add = document.querySelector(".Add");
let close = document.querySelector('.close');
let showform = document.querySelector(".showform");

const form = document.querySelector("form");

const imgUrlInp = document.querySelector(".imgUrl");
const UsernameInp = document.querySelector(".Name");
const agendaInp = document.querySelector(".agenda");

const category = document.querySelectorAll('input[name="category"]');

const submit = document.querySelector("#submit"); 

// Event Listeners
add.addEventListener("click",function(){
    showform.style.display = "initial"
})
close.addEventListener("click",function(){
    showform.style.display = "none";
})
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const selectedCategory = document.querySelector('input[name="category"]:checked');
   if (imgUrlInp.value.trim() === "") {
    alert("Please Fill The Image URL");
    return;
}

if (UsernameInp.value.trim() === "") {
    alert("Please Enter Your Name");
    return;
}

if (agendaInp.value.trim() === "") {
    alert("Please Enter Your Bio");
    return;
}

if (!document.querySelector('input[name="category"]:checked')) {
    alert("Please Select A Category");
    return;
}
})