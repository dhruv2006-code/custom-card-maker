let form = document.querySelector('form');
let inputs = document.querySelectorAll('input')
let main = document.querySelector('#main');
form.addEventListener('submit',function(dets){
dets.preventDefault();
let clutter = '';
clutter += `<div class="card">
      <img src="${inputs[3].value}" alt="">
      <h2>${inputs[0].value}</h2>
      <h3>${inputs[1].value}</h3>
      <h5>${inputs[2].value}</h5>
    </div>`
    main.innerHTML += clutter;
    form.reset();

})