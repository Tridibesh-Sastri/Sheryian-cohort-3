const h1 = document.querySelector("h1");
const anime = document.querySelector("#anime");
const slogan = document.querySelector("#slogan");

slogan.setAttribute("width", "500px");
slogan.setAttribute("height", "500px");
slogan.style.alignItems = "center";
slogan.style.justifyContent = "center";
slogan.style.textAlign = "center";
slogan.style.backgroundColor = "#b55f5f";
slogan.textContent = "Anime is the best";

// create a new element
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph created using JavaScript.";
newElement.style.color = "#ffffff";
newElement.style.fontSize = "18px";
newElement.style.marginTop = "20px";

// insertion of the new element into the DOM 
// old -> appendChild, insertBefore, replaceChild, removeChild
// new -> append, prepend, before, after, replaceWith, remove

slogan.appendChild(newElement);