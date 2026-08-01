console.log(this);
console.log("Hi, I am Sheryians Cohort 3");


function abc(){
    console.log(this);// this will refer to the global object (window in browsers) when called in a regular function
}

'use strict'; // Enabling strict mode to see the difference in 'this' behavior
function def(){
    console.log(this); // In strict mode, 'this' will be undefined in a regular function
}

var obj = {
    name: "Sheryians Cohort 3",
    display: function() {
        console.log(this); // 'this' will refer to the obj when called as a method
    }
};

var arrowFunc = () => {
    console.log(this); // In arrow functions, 'this' is lexically bound to the surrounding context (window in this case)
}
abc(); // Logs the global object (window)
def(); // Logs undefined due to strict mode
obj.display(); // Logs the obj
arrowFunc(); // Logs the global object (window) due to lexical binding of 'this' in arrow functions 

var obj2 = {
    name: "Tennesine",
    age: 25,
    display: ()=>{
        console.log(this); // 'this' will refer to the global object (window) due to arrow function's lexical binding
    }
}

// this in event listeners
var button = document.createElement('button');
button.innerText = "Click Me";
document.body.appendChild(button);

button.addEventListener('click', function() {
    console.log(this); // 'this' will refer to the button element that was clicked
});



// function sharing call, apply, bind

let student1 = {
    firstName: "John",
    lastName: "Doe",
    getIntro: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

let student2 = {
    firstName: "Jane",
    lastName: "Smith"
}

student1.getIntro(); // Logs "John Doe"
student2.getIntro(); // This will throw an error because student2 does not have a getIntro method.

// Using call to borrow the method from student1
student1.getIntro.call(student2); // Logs "Jane Smith"

let student3 = {
    firstName: "Alice",
    lastName: "Johnson"
}

function getIntro(){
    console.log(this.firstName + " " + this.lastName);
}

getIntro.call(student3); // Logs "Alice Johnson"

let student4 = {
    firstName: "Bob",
    lastName: "Brown",
    details :function(city, country){
        console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country);
    }
}

let student5 = {
    firstName: "Charlie",
    lastName: "Davis"
}
student4.details.call(student5, "New York", "USA"); // Logs "Charlie Davis from New York, USA"

// Using apply to borrow the method from student4
student4.details.apply(student5, ["Los Angeles", "USA"]); // Logs "Charlie Davis from Los Angeles, USA"

// Using bind to create a new function with 'this' bound to student5
let boundDetails = student4.details.bind(student5, "Chicago", "USA");
boundDetails(); // Logs "Charlie Davis from Chicago, USA"







// Prototype and Inheritance
// __proto__ is a property that points to the prototype of an object. It is used for inheritance in JavaScript. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it looks up the prototype chain using __proto__ until it finds the property or reaches the end of the chain (null).
// Example of prototype and inheritance
let animal = {
    eats: true,
    walk: function(){
        console.log("Animal can walk");
    }
}



function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function(){
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}