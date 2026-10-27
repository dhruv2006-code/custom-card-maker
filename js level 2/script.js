let gmail = document.querySelector("#Email");
let pass = document.querySelector("#pass");
let form = document.querySelector('form')
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#passwordError").style.display = "none";
    document.querySelector("#emailError").style.display = "none";

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   let emailAns =  emailRegex.test(gmail.value);
   let passwordAns =  passwordRegex.test(pass.value);
  let isValid = true;
   if(!emailAns){
    document.querySelector("#emailError").style.display = "initial";
    isValid = false;
   }
   
   if(!passwordAns){
    document.querySelector("#passwordError").style.display = "initial";
    isValid = false;
   }
   if(isValid){
    document.querySelector('#complete').style.display="initial";

   }
})