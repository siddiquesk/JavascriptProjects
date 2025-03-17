let hideEl = document.querySelector('.hide');
let barEl = document.querySelector('.bar');
let close = document.querySelector('.close');

// Mobile menu open
barEl.addEventListener('click', () => {
  hideEl.style.display = "block";
});

// Mobile menu close
close.addEventListener('click', () => {
  hideEl.style.display = "none";
});

window.addEventListener('resize',()=>{
  if(window.innerWidth >700){
    hideEl.style.display = "none";
  }
})

