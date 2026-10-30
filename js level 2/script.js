let download = document.querySelector('.pgs-bar');
let percent = document.querySelector('h3');
let seconds = 5;
let count = 0;
let intv = setInterval(() => {
    count++
    if(count<=100){
        download.style.width = `${count}%`
        percent.textContent = `${count}%`
    } 
    else{
        document.querySelector('h2').textContent = "Downloaded"
    }
},(seconds*1000) /100);

let dwn = document.querySelector('.dwn-box');

setTimeout(() => {
    dwn.style.display = "none";
}, 6000);