// =========================
// Part 1: Variables & Conditionals
// =========================

let username = "student";
let isLoggedIn = true;
let age = 18;

// Debug: log initial variable values
console.log("Username:", username);
console.log("Is Logged In?", isLoggedIn);
console.log("User Age:", age);

function checkLogin() {
  const statusElement = document.getElementById("status");

  if (isLoggedIn && age >= 18) {
    console.log("Login check passed");
    statusElement.textContent = `Welcome, ${username}! You are logged in.`;
  } else if (!isLoggedIn) {
    console.log("Login failed: not logged in");
    statusElement.textContent = "Please log in to continue.";
  } else {
    console.log("Login failed: underage");
    statusElement.textContent = "You must be 18 or older to continue.";
  }
}

// =========================
// Part 2: Custom Functions
// =========================

// Function to add two numbers
function addNumbers(a, b) {
  const sum = a + b;
  console.log(`addNumbers(${a}, ${b}) = ${sum}`);
  return sum;
}

// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F = ${celsius.toFixed(1)}°C`);
  return celsius;
}

// Call and display result of functions
const result = `10 + 20 = ${addNumbers(10, 20)}, 98°F = ${toCelsius(98).toFixed(1)}°C`;
document.getElementById("function-result").textContent = result;

// =========================
// Part 3: Loops
// =========================

const outputList = document.getElementById("loop-output");

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
  const li = document.createElement("li");
  li.textContent = `For loop count: ${i}`;
  outputList.appendChild(li);
}

// While loop
let count = 1;
while (count <= 3) {
  console.log("While loop iteration:", count);
  const li = document.createElement("li");
  li.textContent = `While loop count: ${count}`;
  outputList.appendChild(li);
  count++;
}

// =========================
// Part 4: DOM Interactions
// =========================

// 1. Change title color
const titleElement = document.getElementById("main-title");
titleElement.style.color = "darkblue";
console.log("Title color set to darkblue");

// 2. Add class to button
const button = document.querySelector("button");
button.classList.add("btn");
console.log("Class 'btn' added to button");

// 3. Set initial status text
const statusText = document.getElementById("status");
statusText.textContent = "Click the button to check login.";
console.log("Initial status text set");


