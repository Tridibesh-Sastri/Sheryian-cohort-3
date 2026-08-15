let h2 = document.createElement("h2");
console.log(h2);

const main = document.querySelector("main");

h2.textContent = "This is a React App";
// h2.style.color = "blue";
 
main.appendChild(h2);



let rh2 = React.createElement(
    "h2",
    {className: "react-h2"},
    React.createElement("span", null, "This is span")
);


console.log(h2)

console.log(rh2);

let reacth2 = document.querySelector(".react-h2");
h2.style.color = "blue";

console.log(ReactDOM);

main.append(rh2);
// reacth2.style.fontSize = "30px";
// reacth2.style.color = "red";


let root = document.getElementById("root");
let rootOfReact = ReactDOM.createRoot(root);

rootOfReact.render(rh2);