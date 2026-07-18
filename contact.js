var MenuBtn = document.getElementById("MenuBtn");
var SideNavbar = document.querySelector(".SideNavbar");
var closebtn = document.getElementById("closebtn")

MenuBtn.addEventListener("click", () => {
    SideNavbar.classList.toggle("show");
});

closebtn.addEventListener("click", () => {
    SideNavbar.classList.toggle("show");
});

document.getElementById("contactform").addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let subject=document.getElementById("subject").value.trim();
    let message=document.getElementById("message").value.trim();
    if(name==""||email==""||subject==""||message=="")
    {alert("please fill all fields")
    return;
 }
 alert("Message Sent Succesfully");
 window.location.href="index.html";
    
})