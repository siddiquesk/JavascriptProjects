window.onload = () => {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", calculatebmi);
};

function calculatebmi() {
  const heightInput = document.querySelector("#height-input");
  const weightInput = document.querySelector("#weight-input");
  const result = document.querySelector("#result");

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || isNaN(height) || height <= 0) {
    result.textContent = "Please provide a valid height";
    return;
  }

  if (!weight || isNaN(weight) || weight <= 0) {
    result.textContent = "Please provide a valid weight";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.5) {
    result.textContent = `Underweight: ${bmi}`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.textContent = `Normal: ${bmi}`;
  } else if (bmi >= 25 && bmi < 29.9) {
    result.textContent = `Overweight: ${bmi}`;
  } else if (bmi >= 30 && bmi < 34.9) {
    result.textContent = `Obesity Class 1: ${bmi}`;
  } else if (bmi >= 35 && bmi < 39.9) {
    result.textContent = `Obesity Class 2: ${bmi}`;
  } else {
    result.textContent = `Extreme Obesity: ${bmi}`;
  }

  // ✅ After calculation, clear input fields
  heightInput.value = "";
  weightInput.value = "";
}
