import { getRandomColor } from "../../utils/randomColor.js";

function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    let color = getRandomColor();
    pentagon.style.backgroundColor = color;
  });
  return pentagon;
}

export { Pentagon };
