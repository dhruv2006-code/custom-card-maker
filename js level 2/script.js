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

const cardContainer  = document.querySelector('.card-container');
const upBtn = document.querySelector('.upBtn')
const downBtn = document.querySelector('.downBtn')
// Event Listeners
add.addEventListener("click",function(){
    showform.style.display = "initial"
})
close.addEventListener("click",function(){
    showform.style.display = "none";
})
// form validation
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

if (!selectedCategory) {
    alert("Please Select A Category");
    return;
}
saveToLocalStorage({
    imgInp : imgUrlInp.value.trim(),
    username: UsernameInp.value.trim(),
    agenda :agendaInp.value.trim(),
    category:selectedCategory.value.trim(),
})
form.reset()
})

// Save to Local Storage

function saveToLocalStorage(obj){
    if(localStorage.getItem("tasks") === null){
        // purana oldStorage Data Nikal raha hai
        let oldTasks = [];
        oldTasks.push(obj)
        localStorage.setItem("tasks",JSON.stringify(oldTasks));
}else{
    let oldTasks = JSON.parse(localStorage.getItem("tasks"));
    oldTasks.push(obj)
    localStorage.setItem("tasks",JSON.stringify(oldTasks));
}
}

function makeCards(){
    let allCards = JSON.parse(localStorage.getItem("tasks"))
   allCards.forEach(function(task){
    // Main Personal Container
let personal = document.createElement("div");
personal.classList.add("personal");

// Profile Image
let profile = document.createElement("img");
profile.classList.add("profile");
profile.src = task.imgInp;
profile.alt = "";

// Name
let name = document.createElement("h3");
name.classList.add("name");
name.textContent = task.username;

// Urgency
let urgency = document.createElement("div");
urgency.classList.add("urgency");

// Append inside personal
personal.append(profile, name, urgency);


// Other Container
let other = document.createElement("div");
other.classList.add("other");

// Work Container
let work = document.createElement("div");
work.classList.add("work");

let mainwork = document.createElement("h5");
mainwork.classList.add("mainwork");
mainwork.textContent = "Work";

let typeWork = document.createElement("h3");
typeWork.classList.add("typeWork");
typeWork.textContent = "Call";

work.append(mainwork, typeWork);


// Category Container
let finalCategory = document.createElement("div");
finalCategory.classList.add("finalCategory");

let mainCategory = document.createElement("h5");
mainCategory.classList.add("mainCategory");
mainCategory.textContent = "Category";

let urgencyType = document.createElement("h3");
urgencyType.classList.add("urgencyType");
urgencyType.textContent = task.category;

finalCategory.append(mainCategory, urgencyType);


// Append work and category inside other
other.append(work, finalCategory);
let card = document.createElement('div')
card.classList.add('card')
card.append(personal,other)

// Final append to your main parent
document.querySelector(".card-container").append(card);
   })
   
}
makeCards()

function updateCard(){
     
    let cards= document.querySelectorAll(".card-container .card");
    
card.forEach(function(card,index){
            card.style.zIndex = `${3 - i}`;
        card.style.transform = `translateY(${i*10}px) scale(${1-i*0.02})`
        card.style.opacity = `${1-i*0.02}`
}) 
}

upBtn.addEventListener("click",function(){
    let lastChild = cardContainer.lastElementChild;
   if(lastChild){
     cardContainer.insertBefore(lastChild, cardContainer.firstElementChild)
    updateCard()
   
    };
    // update
})

downBtn.addEventListener("click",function(){
let firstChild = cardContainer.firstElementChild;
if(firstChild){
cardContainer.insertBefore(firstChild, cardContainer.lastElementChild);
    // update
    updateCard()
    
}
    
})