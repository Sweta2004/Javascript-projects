let count=0;

const btn1= document.getElementById("btn_1");//not use get element by class name

const num=document.getElementById("num");
btn1.addEventListener("click",function(){
    count--;
    num.textContent=count;
})

const btn2= document.getElementById("btn_2");
btn2.addEventListener("click",function(){
    count=0;
    num.textContent=count;
})

const btn3= document.getElementById("btn_3");
btn3.addEventListener("click",function(){
    count++;
    num.textContent=count;
})

//refer js of original version which is optimized one