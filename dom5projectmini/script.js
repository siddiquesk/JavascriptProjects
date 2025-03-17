/*
let container=document.querySelector(".contain");
let btn=document.querySelector("button");

let flag=0;
btn.addEventListener("click",function(){
    if(flag==0)
    {
        container.style.backgroundColor="yellow";
        container.style.border="5px solid black";
        console.log(container);
        flag=1;
    }
    else{
        container.style.backgroundColor="transparent";
        container.style.border="5px solid black";
        console.log(container);
        flag=0;
    }
})
    */
var para=document.querySelector("p");
let btn=document.querySelector(".add");

let flag=0;
btn.addEventListener("click",function(){
    if(flag===0){
        para.innerHTML="Friend";
        para.style.color="green";
        flag=1;
    }
   else{
    para.innerHTML="Strange";
    para.style.color="red";
    flag=0;
   }
})
