// =========================
// Part 1: Variables & Conditionals
// =========================

// Declare some variables
let username = "student";
let isLoggedIn = true;
let age = 18;

// Conditional statement based on variables
function checkLogin() {
  const statusElement = document.getElementById("status");

  if (isLoggedIn && age >= 18) {
    statusElement.textContent = `Welcome, ${username}! You are logged in.`;
  } else if (!isLoggedIn) {
    statusElement.textContent = "Please log in to continue.";
  } else {
    statusElement.textContent = "You must be 18 or older to continue.";
  }
}

// =========================
// Part 2: Custom Functions
// =========================

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Call and display result of functions
const result = `10 + 20 = ${addNumbers(10, 20)}, 98°F = ${toCelsius(98).toFixed(1)}°C`;
document.getElementById("function-result").textContent = result;

// =========================
// Part 3: Loops
// =========================

// Example 1: For loop
const outputList = document.getElementById("loop-output");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `For loop count: ${i}`;
  outputList.appendChild(li);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  const li = document.createElement("li");
  li.textContent = `While loop count: ${count}`;
  outputList.appendChild(li);
  count++;
}

// =========================
// Part 4: DOM Interactions
// =========================

// 1. Change main title color
document.getElementById("main-title").style.color = "darkblue";

// 2. Add a class to the button (optional, but shows interaction)
const button = document.querySelector("button");
button.classList.add("btn");

// 3. Set initial status text
document.getElementById("status").textContent = "Click the button to check login.";
