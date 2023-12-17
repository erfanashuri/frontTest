const screen = document.querySelector(".screen")
let lastShowPage;

screenChanger("Home")

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
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
    screen.insertAdjacentHTML("afterbegin",`<section class="content-show container"><img src="/assets/images/content1.png" class="content-img_1" alt="Front End"><div class="content-text__container"><h3>Welcome to Front-End test site...</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit . exahfg Labore molestiae dignissimos asperiores perspiciatis autem consectetur voluptatibus deleniti ex.</p></div><div class="content-button__container"><a class="waves-effect waves-light blue darken-2 btn"><i class="material-icons left">code</i>programming toturial</a><a class="waves-effect waves-light blue darken-2 btn"><i class="material-icons left">people_outline</i>users manager</a></section>`)

  }else if(tabName==="Users"){
    screen.innerHTML=""
    screen.insertAdjacentHTML("afterbegin",`<section class="usercontent-show container">

    <ul class="collapsible user-list hide-on-large-only">      
    </ul>

    <table class="striped container hide-on-med-and-down">
      <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
      </thead>

      <tbody id="table">
      </tbody>
    </table>

    <!-- add button & modal -->
    <a id="add-user__button" class="waves-effect waves-light btn"><i class="material-icons left">group_add</i>add user</a>

    <div class="add-user__background disp-none"></div>

    <div class="add-user__modal container">
      <span class="add-user__modal__header">
        <i class="material-icons">person_add</i>Add User
      </span>

      <div class="input-field col s12">
        <input id="Name" type="text" class="validate">
        <label for="Name">Name</label>
      </div>
      <div class="input-field col s12">
        <input id="username" type="text" class="validate">
        <label for="username">Username</label>
      </div>
      <div class="input-field col s12">
        <input id="address" type="text" class="validate">
        <label for="address">Address</label>
      </div>
      <a class="waves-effect waves-light btn"><i class="material-icons left">done</i>Submit</a>
    </div>
    

    <!-- pagination -->
    <ul class="pagination container">
      <li class="waves-effect"><a href="#!"><i class="blue-text text-darken-3 material-icons">chevron_left</i></a></li>

      <li class="waves-effect"><a href="#!"><i class="blue-text text-darken-3 material-icons">chevron_right</i></a></li>
    </ul>

  </section>`)
    //collapsible
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
    //modal
    const addUserBtn=document.querySelector("#add-user__button")
    addUserBtn.addEventListener("click",()=>{
      document.querySelector(".add-user__background").classList.remove("disp-none")
      document.querySelector(".add-user__modal").classList.add("show")
    })
    document.querySelector(".add-user__background").addEventListener("click",event=>{
      document.querySelector(".add-user__modal").classList.remove("show")
      document.querySelector(".add-user__background").classList.add("disp-none")
    })
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        let showCountInPage=4
        let firstCurrentPage=1
        createPage(json,showCountInPage,firstCurrentPage)
      })

  }
}

function createPage(users,showCountInPage,firstCurrentPage){
  let allPages=Math.ceil(users.length/showCountInPage)
  let paginationNodes=``
  for (let page = 0; page < allPages; page++) {
      paginationNodes+=`<li class="waves-effect"><a href="#!">${page+1}</a></li>`
    }
  document.querySelector(".pagination").firstElementChild.insertAdjacentHTML("afterend",paginationNodes)

  changePage(users,showCountInPage,firstCurrentPage)

  const pagination = document.querySelector(".pagination")

  for (let i = 0; i < pagination.childElementCount; i++) {
    let page = pagination.children[i];
    if (i===0) {
      page.addEventListener("click",()=>{changePage(users,showCountInPage,"Prev")});
    }else if(i===pagination.childElementCount-1){
      page.addEventListener("click",()=>{changePage(users,showCountInPage,"Next")});
    }else{
    page.addEventListener("click",()=>{changePage(users,showCountInPage,i)})
    }    
  }
}

function showUsers(users){
  let userHtmlDesk=""
  let userHtmlMob=""
  for (const user of users) {
    let newUserDesk =
      `<tr>
      <td>${user.name}</td>
      <td>
        ${user.username}
      </td>
      <td>
        ${user.email}
      </td>
      <td>
        ${user.address.city}
      </td>
      <td>
        <i class="material-icons yellow-text text-darken-3">create</i>
        <i class="material-icons red-text">delete</i>
      </td>
      </tr>`
      userHtmlDesk+=newUserDesk

    let newUserMob =
      `<li class="user-list-item">
      <div class="collapsible-header user-list-item__head blue-text text-darken-4">
        <i class="material-icons user-list-item__icon blue-text text-darken-3">arrow_drop_down_circle</i>
        <span>${user.name}</span>
      </div>

      <div class="collapsible-body user-list-item__body blue lighten-5">
        
        <div class="user-list__informations">
          <span class="user-list__informations-header">
            Username :
          </span>
          <span class="username">
            ${user.username}
          </span>
        </div>

        <div class="user-list__informations">
          <span class="user-list__informations-header">
            Email :
          </span>
          <span class="email">
            ${user.email}
          </span>
        </div>

        <div class="user-list__informations">
          <span class="user-list__informations-header">
            Address :
          </span>
          <span class="address">
            ${user.address.city}
          </span>
        </div>

        <div class="user-list__informations-action">
          <span class="user-list__informations-header">
            Action :
          </span>
          <div>
            <i class="material-icons yellow-text text-darken-3">create</i>
            <i class="material-icons red-text">delete</i>
          </div>
        </div>
      </div>
    
    </li>`
    userHtmlMob+=newUserMob
  }
document.querySelector("#table").innerHTML=userHtmlDesk
document.querySelector(".user-list").innerHTML=userHtmlMob
}

function changePage(users,showCountInPage,currentPage){

  if (currentPage==="Next") {
    if (lastShowPage===Math.ceil(users.length/showCountInPage)) {
      return
    }
    currentPage=lastShowPage+1
  }

  if (currentPage==="Prev") {
    if (lastShowPage===1) {
      return
    }
    currentPage=lastShowPage-1
  }
  lastShowPage=currentPage
  console.log("after",lastShowPage);
  let pageStart=showCountInPage*currentPage-showCountInPage
  let pageEnd=showCountInPage*currentPage
  showUsers(users.slice(pageStart,pageEnd))
  const pagination = document.querySelector(".pagination")
  for (let i = 1; i < pagination.childElementCount-1; i++) {
    let page = pagination.children[i];
    if(i===currentPage){
      page.className="active"
    }else{
      page.className='waves-effect'
    }
  }
}