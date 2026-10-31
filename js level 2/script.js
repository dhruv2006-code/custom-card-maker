let theme = window.matchMedia("(prefers-color-scheme: dark)")
if(theme.matches){
    console.log("it's dark theme");
}
else{
    console.log("it's in light mode");  
}