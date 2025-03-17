const textarea=document.querySelector('#textarea');
const totalChar=document.querySelector('#totalchar');
const remainingChar=document.querySelector('#remaining');
const totalbtn=document.querySelector('#btn');
const rembtn=document.querySelector('#rem');

totalbtn.addEventListener('click',(event) => {
  updateCount(textarea.value.length);
})

rembtn.addEventListener('click',(event) => {
  RemainingCount(textarea.value.length);
})

  function updateCount(value){
   totalChar.textContent = value;
  }

  function RemainingCount(value){
    remainingChar.textContent = textarea.getAttribute('maxlength') - value;
  }