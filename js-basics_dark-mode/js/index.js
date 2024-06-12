console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("button--dark");
});
console.log(darkModeButton);

lightModeButton = document.querySelector('[data-js="light-mode-button"]');
lightModeButton.addEventListener("click", () => {
  bodyElement.classList.add("button--light");
  bodyElement.classList.remove("button--dark");
});

const toggleModeButton = document.querySelector('[data-js="toggle-button"]');
toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("button--dark");
});
