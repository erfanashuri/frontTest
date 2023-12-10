const screen = document.querySelector(".screen")


//screenChanger("Home")


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  });

for (let tab of document.querySelectorAll(".tab")) {
  tab.addEventListener("click",event=>{
    document.querySelector(".active").className=document.querySelector(".active").className.replace(" active","")
    tab.className +=" active"
    screenChanger(tab.firstChild.innerHTML)
  })}

function screenChanger(tabName) {
  if (tabName==="Home") {
    screen.innerHTML=""
    screen.insertAdjacentHTML("afterbegin",'<section class="content-show container"><img src="/assets/images/content1.png" class="content-img_1" alt="Front End"><div class="content-text__container"><h3>Welcome to Front-End test site...</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit . exahfg Labore molestiae dignissimos asperiores perspiciatis autem consectetur voluptatibus deleniti ex.</p></div><div class="content-button__container"><a class="waves-effect waves-light blue darken-2 btn"><i class="material-icons left">code</i>programming toturial</a><a class="waves-effect waves-light blue darken-2 btn"><i class="material-icons left">people_outline</i>users manager</a></section>')

  }else if(tabName==="Users"){
    //screen.innerHTML=""
    

  }
}