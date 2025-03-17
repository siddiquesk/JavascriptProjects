let hrEl = document.querySelector(".hr");
let minEl = document.querySelector(".min");
let secEl = document.querySelector(".sec");

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Calculate degrees for rotation
    let hrDegree = hours * 30;
    let minDegree = minutes * 6;
    let secDegree = seconds * 6;

    // Apply the rotation to clock hands
    hrEl.style.transform = `rotateZ(${hrDegree + minDegree / 12}deg)`;
    minEl.style.transform = `rotateZ(${minDegree}deg)`;
    secEl.style.transform = `rotateZ(${secDegree}deg)`;
}, 1000);