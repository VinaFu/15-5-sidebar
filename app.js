const toggleBtn = document.querySelector(".sidebar-toggle")
const closBtn = document.querySelector(".close-btn")
const sideBar = document.querySelector(".sidebar")

toggleBtn.addEventListener("click", function(){
    // if (sideBar.classList.contains("show-sidebar")){
    //     sideBar.classList.remove("show-sidebar")
    // } else {
    //     sideBar.classList.add("show-sidebar")
    // } 
    // well-done - do these part by yourself!!
    sideBar.classList.toggle("show-sidebar")
    // that's the use of toggle (above)   
})

closBtn.addEventListener("click", function(){
    sideBar.classList.remove("show-sidebar")
})
