const container = document.querySelector("#container");
const paragraph = document.createElement("p");
const headingThree = document.createElement("h3");
const innerContainer = document.createElement("div");
const headingOne = document.createElement("h1");
const innerParagraph = document.createElement("p");
const btn = document.querySelector("#btn");

paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
headingThree.style.color = "blue";
headingThree.textContent = "I'm a blue h3!";
innerContainer.style.cssText =
  "border: 1px solid black; background-color: pink;";
headingOne.textContent = "I'm in a div";
innerParagraph.textContent = "ME TOO!";

container.appendChild(paragraph);
container.appendChild(headingThree);
innerContainer.appendChild(headingOne);
innerContainer.appendChild(innerParagraph);
container.appendChild(innerContainer);

function alertFunction() {
  alert("What's going on?!");
}

// btn.addEventListener("click", alertFunction);
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
