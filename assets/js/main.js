document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

for (let tab of document.querySelectorAll(".tab")) {
  tab.addEventListener("click",event=>{
    document.querySelector(".active").className=document.querySelector(".active").className.replace(" active","")
    tab.className +=" active"
    pageChanger(tab.firstChild.innerHTML)
  })}

function pageChanger(tabName) {
  if (tabName==="Home") {

    console.log("home");

  }else if(tabName==="Users"){
    
    console.log("users");

  }
}