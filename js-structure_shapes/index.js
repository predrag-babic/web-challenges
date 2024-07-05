console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
import { Circle } from "./components/Circle/Circle.js";
import { Square } from "./components/Square/Square.js";
const root = document.getElementById("root");

/*const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  let color = getRandomColor();
  circle.style.backgroundColor = color;
});*/

/*const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  let color = getRandomColor();
  square.style.backgroundColor = color;
});*/

/*const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  let color = getRandomColor();
  pentagon.style.backgroundColor = color;
});*/

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
