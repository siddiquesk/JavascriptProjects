
let score=0;
var hit;
function increasescore(){
  score+=10;
  document.querySelector("#scoreval").textContent=score;
}
function runhit(){
    hit=Math.floor(Math.random()*5);
   document.querySelector("#hitvar").textContent=hit;
}

function makebubble(){
    let clutter=""

    for(let i=1;i<=91;i++){
        let run=Math.floor(Math.random()*10)
        clutter+=`<div class="bubble">${run}</div>`
    }
    document.querySelector(".pbtm").innerHTML=clutter;
}
let timer=60;
function runTimer()
{
let time=setInterval(function(){
    if(timer>0)
    {
        timer--;
        document.querySelector("#timervalue").textContent=timer;
    }
 
    else{
        clearInterval(time);
        document.querySelector(".pbtm").innerHTML=`<h1>Game over</h1>`;
    }
},1000)
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
    let click=Number(dets.target.textContent);
    if(click===hit)
    {
        increasescore();
        makebubble();
           runhit();
    }
})
runTimer();
makebubble();
runhit();
increasescore();

