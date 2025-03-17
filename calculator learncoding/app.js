let btnele = document.querySelectorAll("button");
const inputel = document.getElementById("result");

for (let i = 0; i < btnele.length; i++) {
  btnele[i].addEventListener("click", () => {
    const value = btnele[i].textContent;

    if (value === 'C') {
      clearResult();
    } else if (value === '=') {
      calculateResult();
    } else {
      appendValue(value);  // Using 'value' instead of 'btnvalue'
    }
  });
}

function clearResult() {
  inputel.value = "";  // Clear the input's value
}

function calculateResult() {
  inputel.value = eval(inputel.value);  // Calculate and display the result
}

function appendValue(value) {
  inputel.value += value;  // Append the value to the input
}