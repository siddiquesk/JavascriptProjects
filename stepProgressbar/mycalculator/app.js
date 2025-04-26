window.onload=()=>{
   let btns=document.querySelectorAll(".numbers");
   let equal=document.querySelector("#equal");
   let screen=document.querySelector(".screen");
   let clear=document.querySelector("#clear");
   btns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    if(screen.value==="please enter a value.."){
      screen.value=""
    }
   screen.value+=e.target.innerHTML;
  })
   })
   equal.addEventListener("click",(e)=>{
    if(!screen.value){
      screen.value="please enter a value.."
    }
    if(screen.value){
     screen.value=eval(screen.value);
    }
   })

clear.addEventListener("click",()=>{
  screen.value=""
})
}