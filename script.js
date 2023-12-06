function getRandomColor() {
  // Generate a random hex color code
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function changeBackgroundColor() {
  // Get a random color
  const randomColor = getRandomColor();

  // Apply the color to the body background
  document.body.style.backgroundColor = randomColor;
}

// Change the background color initially and set an interval for continuous changes
changeBackgroundColor();
setInterval(changeBackgroundColor, 10000); // Change every 5 seconds (adjust as needed)
