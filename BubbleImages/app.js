// Select the <body> element
const bdy = document.querySelector("body");

// Add an event listener that triggers when the mouse moves
bdy.addEventListener("mousemove", (e) => {
  // Get the current mouse position relative to the viewport
  const xCord = e.clientX;
  const yCord = e.clientY;

  // Create a new <span> element dynamically
  const spanEl = document.createElement("span");

  // Position the <span> element at the mouse pointer location
  spanEl.style.left = `${xCord}px`;
  spanEl.style.top = `${yCord}px`;

  // Generate a random size for the <span> element (between 1px and 100px)
  let size = Math.floor(Math.random() * 100 + 1);
  spanEl.style.width = `${size}px`;
  spanEl.style.height = `${size}px`;

  // Append the <span> element to the <body>, making it visible
  bdy.appendChild(spanEl);

  // Remove the <span> element after 1 second to prevent excessive elements
  setTimeout(() => {
    spanEl.remove();
  }, 1000);
});
