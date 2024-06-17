console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 5;
if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;
if (numberOfHotdogs < 5) {
  console.log("2 Euro");
} else if (numberOfHotdogs < 100) {
  console.log("1.50 Euro");
} else if (numberOfHotdogs < 1000000) {
  console.log("1 Euro");
} else {
  console.log("0.10 Euro");
}

// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn.." : "Party time";

console.log(statement);

// Part 5: Greeting
const userName = "Felix";
const coach = "Felix";

const greeting = "Hello " + (coach === userName ? "coach" : userName) + "!";

console.log(greeting);
