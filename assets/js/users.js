//variables
let lastShowPage;

//collapsible
var elems = document.querySelectorAll('.collapsible');
var instances = M.Collapsible.init(elems, {});

//add user modal
const addUserBtn=document.querySelector("#add-user__button")
addUserBtn.addEventListener("click",()=>{
    document.querySelector(".add-user__background").classList.remove("disp-none")
    document.querySelector(".add-user__modal").classList.add("show")
})
document.querySelector(".add-user__background").addEventListener("click",event=>{
    document.querySelector(".add-user__modal").classList.remove("show")
    document.querySelector(".add-user__background").classList.add("disp-none")
})

//fetch users & pagination
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
    let showCountInPage=4
    let firstCurrentPage=1
    createPage(json,showCountInPage,firstCurrentPage)
    })

//functions
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