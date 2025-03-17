window.onload=()=>{
    const buttons=document.querySelectorAll(".number");
    const screen=document.querySelector(".screen");
    const btn=document.querySelector('#btn-equal');
    const clear=document.querySelector('#clear');
    buttons.forEach(button=>{
        button.addEventListener("click",(e1)=>{
         screen.value+=e1.target.innerHTML;

        })
    })
    btn.addEventListener("click",(e)=>{
if(!screen.value){
    screen.value="Enter value";
}
else{
    screen.value=eval(screen.value);
}
    })
    clear.addEventListener("click",()=>{
        screen.value="";
    })
}