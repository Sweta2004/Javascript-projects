const sidebar=document.getElementById("sidebar");

const menuBtn=document.getElementById("sidebar-toggle");

const cross=document.getElementById("cross");

menuBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
})

cross.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar"); /*remove used IMP */
})