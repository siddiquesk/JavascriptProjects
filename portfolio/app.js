var typed = new Typed('#element', {
    strings: ['Software Developer.','Graphic Desiner ','Educator.'],
    typeSpeed: 80,
  });

  let prev = document.querySelector(".previous");
  let next = document.querySelector(".next");
  let imgContain = document.querySelector(".imgcontainer");
  let primg=document.querySelector(".pr-img");
  let currImg = 1;
  
  next.addEventListener("click", () => {
      currImg++;
      updateImage();
  });
  prev.addEventListener("click",()=>{
    currImg--
  })
  
  function updateImage() {
    if(currImg > primg.length){
      currImg = 1;
    }
      imgContain.style.transform = `translateX(${(currImg - 1) * -100}%)`;
  }
