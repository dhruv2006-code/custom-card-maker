let theme = window.matchMedia("(prefers-color-scheme: dark)")
let Btn = document.querySelector("button")
if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"))
}

Btn.addEventListener("click",function(){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains('dark')){
        localStorage.setItem("theme","dark")
    }
    else{
        localStorage.setItem("theme","light")
    }
})

function themeSwitch (){
    function applyTheme(){
            if(theme.matches){
                if(!localStorage.getItem("theme")){
              document.body.classList.add("dark")
         document.body.classList.remove("light")
                }
    }
    else{
        document.body.classList.remove("dark")
    }
}
applyTheme()
 theme.addEventListener('change',applyTheme);
}
themeSwitch()
