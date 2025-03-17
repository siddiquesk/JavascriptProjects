/*heart instagram move and move out
let con=document.querySelector(".contain");
let love=document.querySelector("i");

con.addEventListener("dblclick",function(){
   love.style.transform='translate(-50%, -50%) scale(1)';
   love.style.opacity='0.9';
   love.style.color="pink";
   setTimeout(function(){
    love.style.opacity=0;
  },3000);
  setTimeout(function(){
    love.style.transform='translate(-50%, -50%) scale(0)';
  },1000);
    
})
   */
  let main=document.querySelector(".main");
  let crsr=document.querySelector(".cursor");
  main.addEventListener("mousemove",function(e1){
   crsr.style.left=e1.x+"px";
   crsr.style.top=e1.y+"px";
  })
