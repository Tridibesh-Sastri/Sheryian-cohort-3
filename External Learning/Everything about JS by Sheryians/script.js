// var let const

// var a; declaration
// var a = 10; declaration + initialization
// let b; declaration
// let b = 20; declaration + initialization
// const c; declaration (not allowed without initialization)
// const c = 30; declaration + initialization
// let b = 20;
// const c = 30;
//  d = 40; Implicit global variable 

var username = "Trixion";
//var add to window object
//variables are function scoped 
// redeclaration and reinitialization allowed for var

console.log(num);
var num = 10;

let age = 25;
//let add to block scope
//variables are block scoped 
// redeclaration not allowed but reinitialization allowed for let

const pi = 3.14;
//const add to block scope
//variables are block scoped 
// redeclaration and reinitialization not allowed for const

// scope types: global scope, function scope, block scope

// global scope: variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
// function scope: variables declared inside a function are in the function scope and can only be accessed within that function.
// block scope: variables declared inside a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.

// Temporal Dead Zone (TDZ): The TDZ is the time between the start of a block and the point where a variable declared with let or const is initialized. During this time, the variable cannot be accessed and will throw a ReferenceError if you try to access it. This is because the variable is in a "dead zone" until it is initialized.

// Example of TDZ
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 5;


//Hoisting implies that variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
// Example of hoisting
console.log(y); // undefined (due to hoisting, the declaration is moved to the top, but not the initialization)
var y = 10; 

// var is hoisted and initialized with undefined, while let and const are hoisted but not initialized, leading to a ReferenceError if accessed before initialization.
// var don't have temporal dead zone where let and const have temporal dead zone.

let a = 10;
{
    let a = 20; // This 'a' is in the block scope and shadows the outer 'a'
    console.log("inside block: ", a); // Output: 20
}
console.log("outside block: ", a); // Output: 10 (the outer 'a' is still accessible here)

// dynamic typing: JavaScript is a dynamically typed language, which means that variables can hold values of any type and the type can change at runtime. For example, you can assign a number to a variable and then later assign a string to the same variable without any issues.
let variable = 42;  
console.log(variable); // Output: 42

variable = "Hello, World!";
console.log(variable); // Output: Hello, World! 

//typeof quirks: The typeof operator in JavaScript can sometimes return unexpected results due to historical reasons and the way JavaScript handles types. For example, typeof null returns "object", which is a well-known quirk in JavaScript. Additionally, typeof an array returns "object" as well, which can be confusing since arrays are a specific type of object in JavaScript.
console.log(typeof null);   // Output: "object" (quirk in JavaScript)   
console.log(typeof []);     // Output: "object" (arrays are a type of object)   

// Truthy vs falsy values: In JavaScript, values can be classified as truthy or falsy when evaluated in a boolean context. Falsy values include false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN. All other values are considered truthy. This means that when you use these values in conditional statements or boolean expressions, they will be treated as either true or false based on their truthiness.
if (0) {
    console.log("This will not be printed because 0 is falsy.");
}
if ("Hello") {
    console.log("This will be printed because non-empty strings are truthy.");
}

// Type coercion: JavaScript performs type coercion when you use operators with different types of values. For example, when you use the + operator with a string and a number, JavaScript will convert the number to a string and concatenate them instead of performing addition. This can lead to unexpected results if you're not careful.
console.log("The answer is: " + 42);    // Output: "The answer is: 42" (number 42 is coerced to a string and concatenated)
console.log("5" + 10);    // Output: "510" (number 10 is coerced to a string and concatenated)
console.log("5" - 10);    // Output: -5 (string "5" is coerced to a number and subtraction is performed)
console.log("raja" - 12);    // Output: -5 (string "raja" is coerced to a number and subtraction is performed)    
// false outputs of typeof 
console.log(typeof false);  // Output: "boolean"
console.log(typeof 0);      // Output: "number"
console.log(typeof "");     // Output: "string"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null);   // Output: "object" (quirk in JavaScript)   
console.log(typeof NaN);    // Output: "number" (NaN is considered a number in JavaScript)
console.log(typeof []);    // Output: "object" (arrays are a type of object)    
console.log(typeof {});    // Output: "object" (objects are a type of object)
console.log(typeof function(){}); // Output: "function" (functions are a special type of object in JavaScript)  
console.log(typeof Symbol("sym")); // Output: "symbol" (symbols are a unique and immutable primitive type in JavaScript)    
console.log(typeof 10n);   // Output: "bigint" (BigInt is a primitive type for arbitrary-precision integers in JavaScript)  
console.log(typeof true);   // Output: "boolean"    

// instanceof operator: The instanceof operator in JavaScript is used to check if an object is an instance of a specific constructor function or class. It returns true if the object is an instance of the specified constructor or class, and false otherwise. This operator is useful for checking the type of an object and can be used with built-in constructors like Array, Object, and Function, as well as with custom constructors and classes.
let arr = [1, 2, 3];
console.log(arr instanceof Array);  // Output: true (arr is an instance of Array)
console.log(arr instanceof Object); // Output: true (arr is also an instance of Object, since Array is a subclass of Object)
console.log(arr instanceof Function); // Output: false (arr is not an instance of Function)     
function Person(name) {
    this.name = name;
}   
let person1 = new Person("Alice");
console.log(person1 instanceof Person); // Output: true (person1 is an instance of Person)
console.log(person1 instanceof Object); // Output: true (person1 is also an instance of Object, since Person is a constructor function that creates objects)


// if else if else
let num1 = 10;
let num2 = 20;  
if (num1 > num2) {
    console.log("num1 is greater than num2");
}
else if (num1 < num2) {
    console.log("num1 is less than num2");
}   
else {
    console.log("num1 is equal to num2");
}

// switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//early return pattern
function checkEven(num) {
    if (num % 2 !== 0) {
        return false;
    }
    return true;
}
console.log(checkEven(4)); // Output: true
console.log(checkEven(7)); // Output: false


// rest and spread operator
// rest operator: The rest operator in JavaScript is denoted by three dots (...) and is used to represent an indefinite number of arguments as an array. It allows you to gather multiple arguments into a single array parameter in a function. This is useful when you want to create functions that can accept a variable number of arguments without having to specify them individually.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15  
// spread operator: The spread operator in JavaScript is also denoted by three dots (...) and is used to expand an iterable (like an array or a string) into individual elements. It allows you to spread the elements of an array or the characters of a string into separate arguments or elements in another array or function call. This is useful for combining arrays, copying arrays, or passing elements as individual arguments to functions.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
let str = "Hello";
let chars = [...str];
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']
