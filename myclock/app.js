
/*
window.onload = () => {

 const clearId= setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    
        let ampm=hours   >= 12 ?  "PM" :"AM"
    
    hours = hours % 12;  // Convert 24-hour to 12-hour
    hours = hours ? hours : 12; // If 0 => 12

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    second = second.toString().padStart(2, '0');
    
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".second").innerHTML = second;
    document.querySelector(".ampm").innerHTML = ampm;
    if(hours ==="03" && minutes ==="21" && second==="50"){
      clearInterval(clearId);
      document.querySelector(".para").innerHTML = `<h4>Watch is stopped on Time</h4>`;
      console.log("Clock stopped at 12:00:00");
    }
  }, 1000);

};
*/
let clearId;

function startClock() {
  clearId = setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    second = second.toString().padStart(2, "0");
    
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".second").innerHTML = second;
    document.querySelector(".ampm").innerHTML = ampm;
    
    if (hours === "03" && minutes === "31" && second === "40") {
      clearInterval(clearId);
      document.querySelector(".para").innerHTML = `<h4>✅ Watch is stopped on Time!</h4>`;
      document.body.style.backgroundColor = "#222"; // background change
      document.getElementById("buzzer").play(); // play sound
      document.getElementById("restartBtn").style.display = "inline-block"; // show restart button
    }
  }, 1000);
}

window.onload = startClock;

document.getElementById("restartBtn").onclick = function() {
  document.getElementById("restartBtn").style.display = "none";
  document.querySelector(".para").innerHTML = "";
  document.body.style.backgroundColor = "rgb(7, 7, 7)";
  startClock();
};


