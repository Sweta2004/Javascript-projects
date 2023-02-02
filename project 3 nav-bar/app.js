const elem=document.getElementById("nav-toggle");
const links=document.querySelector(".links");

elem.addEventListener("click", function(){
    links.classList.toggle("myown");
})
