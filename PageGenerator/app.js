

let num=document.querySelector("#num-input");
let opt=document.querySelector("#opt-input");
let generate=document.querySelector("#gen-btn");
let gen=document.querySelector(".gen-content");
let copy=document.querySelector("#copy-btn");

 let count=0,option=""
 let temp=0;
generate.addEventListener("click",()=>{
   getValues()
 })

 function getValues()
 {
           count=num.value
           option=opt.value;
           let url=`https://baconipsum.com/api/?type=meat-and-filler&${option}=${count}&start-with-lorem=1`
           fetchContent(url);
           validate()

 }
 async function fetchContent(url)
 {
    let response=await fetch(url);
    if(response.status ===200)
    {
        let data=await response.json()
        displayGen(data)
      //  console.log(data);
    }
 }
 function displayGen(data)
 {
   let text=""
   text=data.join("<br><br>")
  gen.innerHTML=text;
 }
 function validate()
 {
     temp=""
    if(count >100)
    {
        invalidinput();
        count=100;
        num.value="100";
    }
    else if(count<1 || isNaN(count))
    {
        invalidinput();
        count=5;
        num.value="5";
    
 }
}
 function invalidinput()
 {
    num.style.borderColor="#ff6a67";
    setTimeout(()=>{
        num.style.borderColor="#d3deb4";
    },1000)
 }
 copy.addEventListener("click",()=>{
    let copyText=gen.textContent
    navigator.clipboard.writeText(copyText);
 })

