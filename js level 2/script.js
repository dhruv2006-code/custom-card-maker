let theme = window.matchMedia("(prefers-color-scheme: dark)")
let Btn = document.querySelector("button")
Btn.addEventListener("click",function(){
    document.body.classList.toggle("dark")
})
function themeSwitch (){
    function applyTheme(){
            if(theme.matches){
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    }
    else{
        document.body.classList.remove("dark")
    }
}
applyTheme()
 theme.addEventListener('change',applyTheme);
}
themeSwitch()