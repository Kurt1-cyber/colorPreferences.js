const colorPreferences = [];

while (colorPreferences.length < 3) {
  const color = prompt("Enter a color you like:");

  if (color === null || color.trim() === "") {
    console.log("No color entered. Please enter a valid color.");
    continue;
  }

  colorPreferences.push(color.trim());

  console.log("Current color preferences:", colorPreferences);
}

console.log("You have reached the maximum number of color preferences:", colorPreferences);
