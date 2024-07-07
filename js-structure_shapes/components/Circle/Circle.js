import { getRandomColor } from "../../utils/randomColor.js";

function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    let color = getRandomColor();
    circle.style.backgroundColor = color;
  });
  return circle;
}

export { Circle };
