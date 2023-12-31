//side nav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

//Theme
let theme = localStorage.getItem("theTheme")
const themeChanger=document.querySelector("#theme-changer")
const themeChanger2=document.querySelector("#theme-changer2")
const root=document.querySelector(":root")
themeChanger.addEventListener("click",setTheme)
themeChanger2.addEventListener("click",setTheme)
setTheme(theme)
function setTheme(event) {

  if (event==="light") {
    //pass 
  }else if(event==="dark"){
    themeChanger.checked=true
    themeChanger2.checked=true

  }else if(event===null){
    localStorage.setItem("theTheme","light")
    
  }else{
    //changed by buttons
    themeChanger.checked=event.target.checked
    themeChanger2.checked=event.target.checked
    if(themeChanger.checked && themeChanger2.checked){
      localStorage.setItem("theTheme","dark")
    }else{
      localStorage.setItem("theTheme","light")
    }
  }
  theme = localStorage.getItem("theTheme")
  changeTheme(theme)
}

function changeTheme(theme) {
  if(theme==="light"){
    root.style.setProperty("--first-color","#fff")
    root.style.setProperty("--text-color","#424242")
    root.style.setProperty("--sec-color","#bbdefb")
  }else if(theme==="dark"){
    root.style.setProperty("--first-color","#616161")
    root.style.setProperty("--text-color","#fff")
    root.style.setProperty("--sec-color","#1565c0")
  }
}