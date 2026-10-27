let gmail = document.querySelector("#Email");
let pass = document.querySelector("#pass");
let form = document.querySelector('form')
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#emailError").style.visibility = "hidden";
    document.querySelector("#passwordError").style.visibility = "hidden";
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   let emailAns =  emailRegex.test(gmail.value);
   let passwordAns =  passwordRegex.test(pass.value);

   if(!emailAns){
    document.querySelector("#emailError").style.display = "initial";
   }
   
   if(!passwordAns){
    document.querySelector("#passwordError").style.display = "initial";
   }
})