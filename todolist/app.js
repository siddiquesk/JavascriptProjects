
/*const btnEl=document.querySelector(".btn");
const inputEl=document.querySelector("#input");
const taskEl=document.querySelector(".list-item");

btnEl.addEventListener("click", (event) => {
  if (inputEl.value == "") {
    alert("Please add task");
  } else {
    let lisEl = document.createElement("li");  // New <li> element banta hai
    lisEl.textContent = inputEl.value;  // <li> ka text input field se set hota hai
    taskEl.appendChild(lisEl);  // <li> ko <ul> ke andar append karte hain
    // ❌ Button to remove task
    let spanEl = document.createElement("span");
    spanEl.textContent = "\u00D7";  // Cross button ka symbol set karte hain
    lisEl.appendChild(spanEl);  // <span> ko <li> ke andar add karte hain
    saveTask();  // LocalStorage me save karte hain
  }
  inputEl.value = "";  // Input field clear karte hain
});


taskEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});

function saveTask(){
  localStorage.setItem("task",taskEl.innerHTML);
}
function getItem(){
  taskEl.innerHTML=localStorage.getItem("task");
}
getItem();
*/

const btnEl=document.querySelector(".btn");
const ultaskEl=document.querySelector(".list-item");
const inputEl=document.querySelector("#input");


btnEl.addEventListener("click",()=>{
if(inputEl.value==""){
  alert("Please add task");
}else{
let tasklist=document.createElement("li");
tasklist.textContent=inputEl.value;
ultaskEl.appendChild(tasklist);
let spanEl=document.createElement("span");
spanEl.textContent="\u00D7";
tasklist.appendChild(spanEl);
setItems();
}
inputEl.value=""
})
ultaskEl.addEventListener("click",(e)=>{
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    setItems();
  }
})

function setItems(){
  localStorage.setItem("task",ultaskEl.innerHTML);
}
function getItems(){
  ultaskEl.innerHTML=localStorage.getItem("task");
}
getItems();