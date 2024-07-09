function generateEmail(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  const email = `${firstName}.${lastName}@hotmail.com`.toLowerCase();
  return email;
}

const newUser = {
  firstName: "Predrag",
  lastName: "Babic",
};

const email = generateEmail(newUser);
console.log(email);

function getUserFromEmail(email) {
  if (!email.includes("@")) {
    return null;
  }

  const [namePart] = email.split("@");

  if (!namePart.includes(".")) {
    return null;
  }

  const [firstName, lastName] = namePart.split(".");

  return {
    firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
    lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
  };
}

console.log(getUserFromEmail("predrag babic"));

console.log(getUserFromEmail("predragbabic@hotmail.com"));

console.log(getUserFromEmail("predrag.babic@hotmail.com"));

const emailForm = document.querySelector('[data-js="emailForm"]');
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.querySelector('[data-js="firstName"]').value;
  const lastName = document.querySelector('[data-js="lastName"]').value;
  const email = generateEmail({ firstName, lastName });
  document.querySelector('[data-js="generated-email"]').textContent = email;
});

const nameForm = document.querySelector('[data-js="nameForm"]');
nameForm.addEventListener("submit", (event1) => {
  event1.preventDefault();

  const email = document.querySelector('[data-js="email"]').value;
  const user = getUserFromEmail(email);
  const guessedName = document.querySelector('[data-js="guessed-name"]');
  if (user) {
    guessedName.textContent = `${user.firstName} ${user.lastName}`;
  } else {
    guessedName.textContent = "invalid email format";
  }
});

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const result = divide(multiply(sum(2, 3), 4), subtract(6, 2));

console.log(result);

let mealCount = 0;
let workedHours = 0;

wakeUp(9);

function wakeUp(time) {
  console.log("⏰ good morning!");
  if (time < 8) {
    eatBreakfast();
  }
  commute();
}
//First console log will be "good morning" then we have if condition->
//time is not smaller then 8 then the function coommute will be executed.

function commute() {
  console.log("🚴 reaching the office...");
  pretendToWork();
}

//second console log will be "reaching the office" -> and then the function pretend to work will be called

function goHome() {
  console.log("🚴 going back home...");
  if (mealCount === 2) {
    goToGym();
  } else {
    watchTV();
  }
}

//fifth console log will be "going back home" and then we have if condition.
//if mealCount is equal 2 then goToGym else watchTV.In this case our mealCount is 1.
//that means watchTV will be called "📺 let's call it a day".

function eatBreakfast() {
  console.log("☕ nice way to start the day!");
  mealCount++;
}

//will not be called

function eatLunch() {
  console.log("🥪 lunch with colleagues!");
  mealCount++;
}

//will be called in the pretendToWork function and will increase the mealCount by 1.

function pretendToWork() {
  console.log("🛠️ being busy");
  workedHours = workedHours + 4;
  if (workedHours === 4) {
    eatLunch();
    pretendToWork();
  } else {
    goHome();
  }
}

//third console log will be "being busy" then we have variabel workedHours=workedHours + 4 that gives us sum 4
//then we have if condition -> in this case workedHours is equal to 4 and the function eatLunch will be called and pretendToWork.
//that means we will get fourth console log "lunch with colleagues" and "being busy"
//

function goToGym() {
  console.log("🏃‍♀️ keeping it fit");
}

//will not be called

function watchTV() {
  console.log("📺 let's call it a day");
}

//will be called in the goHome function

let time = 14;
const greetingText = time < 12 ? "Good morning" : "Good afternoon";

console.log(greetingText);

function printSum(first, second, third) {
  const sum = first + second + third;
  console.log("The sum of your numbers is: " + sum);
}

console.log(printSum(1, 2, 3));
