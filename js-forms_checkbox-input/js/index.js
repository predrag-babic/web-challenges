console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  // --v-- write your code here --v--
  event.preventDefault();
  if (tosCheckbox.checked) {
    hideTosError();
    hideSuccessMessage();
    showSuccessMessage();
    alert("Form submitted");
  } else {
    showTosError();
    hideSuccessMessage();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
