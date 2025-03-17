
/*
let box=document.querySelectorAll(".box");

box.forEach(function(val){
val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left=dets.x+"px";
    val.childNodes[3].style.top=dets.y+"px";

}) 
val.addEventListener("mouseenter",function(dets){
    val.childNodes[3].style.opacity=1;
}) 
val.addEventListener("mouseleave",function(dets){
    val.childNodes[3].style.opacity="0";
}) 

})
*/
let box = document.querySelectorAll(".box");

box.forEach(function (val) {
  val.addEventListener("mousemove", function (dets) {
    let img = val.childNodes[3]; // Select the image as it is
    let rect = val.getBoundingClientRect(); // Get the box's position

    let x = dets.clientX - rect.left; // X relative to the box
    let y = dets.clientY - rect.top;  // Y relative to the box

    // Ensure the image doesn't go below the box
    if (y + img.offsetHeight / 2 > rect.height) {
      y = rect.height - img.offsetHeight / 2;
    }

    img.style.left = x + "px";
    img.style.top = y + "px";
  });

  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });

  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = "0";
  });
});
