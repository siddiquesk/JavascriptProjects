/*
h2 {
  font-size: 30px;
  margin-top: 100px;
}
button {
  width: 150px;
  padding: 15px 15px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: rgb(7, 7, 7);
}
div {
  width: 500px;
  height: 200px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px gainsboro;
}
*/
/*

let btn=document.querySelector("button");
let h2=document.querySelector("h2");
let divEl=document.querySelector("div");
btn.addEventListener("click",function(){
   let getColor= createColor();
     let result=h2.textContent=getColor;
     divEl.style.backgroundColor=result;
     btn.style.backgroundColor=result;
})

function createColor()
{
    let red=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let color=`Rgb(${red},${blue},${green})`;
    return color;
}
    */
/*
let btn=document.querySelector("button");
let para=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");


function changecolor()
{
    console.dir(this.innerText);
    this.style.backgroundColor="red";
}
btn.addEventListener("click",changecolor);
para.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
*/

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let items = document.createElement("li");
  let delbtn = document.createElement("button");
  ul.appendChild(items);
  items.textContent = inp.value;
  inp.value = "";
  items.style.margin="10px";
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");
  items.appendChild(delbtn);

  // Add event listener for the delete button right after it's created 
  delbtn.addEventListener("click", function() {
    this.parentElement.remove();
  });
});


