console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newArticle = document.createElement("article");
newArticle.classList.add("post");
const newParagraph = document.createElement("p");
newParagraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit";
newParagraph.classList.add("post__content");
const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@username";
const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";

document.body.append(newArticle);
newArticle.append(newParagraph, newFooter);
newFooter.append(newSpan, newButton);

//newButton.setAttribute("data-js", "newLikeButton");
newButton.addEventListener("click", handleLikeButtonClick);
