// const firstBtn = document.querySelector("#firstToggle");
// const secondBtn = document.querySelector("#secondToggle");
// const thirdBtn = document.querySelector("#thirdToggle");

// firstBtn.addEventListener("click", () => {
//   secondBtn.classList.toggle("hide");
// // });
// // Get the button element
// const bgColorToggler = document.getElementById("bgColorToggler");

// // Add event listener to the button
// bgColorToggler.addEventListener("click", function () {
//   // Calculate new position
//   const currentPosition = parseFloat(getComputedStyle(bgColorToggler).left);
//   const newPosition = currentPosition === 20 ? window.innerWidth - 150 : 20; // Toggle between initial and final positions

//   // Apply new position
//   bgColorToggler.style.left = newPosition + "px";
// });
const colors = ["white", "hsl(268, 75%, 9%)", "hsl(222, 26%, 31%)"]; // Define an array of background colors
let colorIndex = 0; // Index to keep track of current background color
let positionIndex = 0; // Index to keep track of current button position

// Get the button element
const bgColorToggler = document.getElementById("bgColorToggler");

// Add event listener to the button
bgColorToggler.addEventListener("click", function () {
  // Change the background color of the body to the next color in the array
  document.body.style.backgroundColor = colors[colorIndex];

  // Increment color index or reset to 0 if end of array is reached
  colorIndex = (colorIndex + 1) % colors.length;

  // Calculate new position
  const positions = [5, window.innerWidth / 2 - 210, window.innerWidth - 10]; // Positions for left, center, and right
  const newPosition = positions[positionIndex]; // Get the next position
  positionIndex = (positionIndex + 1) % positions.length; // Increment position index or reset to 0 if end of array is reached

  // Apply new position
  bgColorToggler.style.left = newPosition + "px";
  if (positionIndex === 0) {
    bgColorToggler.style.left = positions[0] + "px";
  }
});
