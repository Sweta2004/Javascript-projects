const colors=["red","yellow","green","blue","pink"];

const btn= document.getElementById("btn");

//const elem1= document.querySelector("color"); is wrong
const elem1= document.querySelector("#color"); //or .color for class name

btn.addEventListener("click",function (){
    const randomNum= randomNumberGenerator();
    document.body.style.backgroundColor=colors[randomNum];
    elem1.textContent=colors[randomNum];//responsible for changing text of color like pink,red,...
    btn.style.backgroundColor=colors[randomNum];//dont miss style
});

function randomNumberGenerator(){
    return Math.floor(Math.random()* colors.length);//random gives b/w 0 & 1
}