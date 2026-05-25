//function declaration
function add(a, b) {
    return a + b;
}
//function expression
const subtract = function (a, b) {
    return a - b;
}   
//arrow function 1liner
const multiply = (a, b) => a * b;
// arrow function multiliner
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
// another valid way of arrow function
const power = a => console.log(a ** 2);

// comparision between function declaration and function expression
// function declaration is hoisted, meaning it can be called before its definition
// function expression is not hoisted, meaning it cannot be called before its definition

// Example of hoisting with function declaration
//IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined
(function() {
    console.log("This is an IIFE");
})();
// IIFFE used to create a new scope and avoid polluting the global scope
// IIFFE used for private scope and data encapsulation

// Callback function 

function mainRoad(cb){
    console.log("Main road is open");
    if(typeof(cb) =='function'){
        cb();
    }
}
function sideRoad(){
    console.log("Side road is open");
}
mainRoad(sideRoad);