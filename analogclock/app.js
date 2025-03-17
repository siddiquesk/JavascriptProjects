let textarea = document.querySelector("#textarea");
let totalchar = document.querySelector("#totalchar");
let remain=document.querySelector("#remaining");
textarea.addEventListener("keyup", () => {
    updatechar();
});

// Define the updatechar function
function updatechar() {
    totalchar.innerText = textarea.value.length;
    remain.innerText=textarea.getAttribute("maxlength")-textarea.value.length;
}

// Initial update
updatechar();