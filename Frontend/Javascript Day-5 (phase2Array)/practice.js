// let prompt = require("prompt-sync")();
let prompt = require("prompt-sync")();
var student1 = 'rittik';
var student2 = 'sarthak';
var students = ['rittik', 'sarthak', 'satyan', 'animesh', 'anil'];
//js have  non primitive data types which are 3 types 
// 1. Arrays
// 2. Objects
// 3. Functions
// in js arrays can store multivple primitive and non primitive data types
// arrays are mutable in js
// arrays are ordered collection of data
let arr = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c', 'd'];
let arr3 = [1, 'a', true, null, undefined, { name: 'rittik' }, [1, 2, 3]];
let arr4 = new Array(1, 2, 3, 4, 5);
let arr5 = [1,3, (a,b) => a+b, {name: 'rittik', age: 24}, [1,2,3], null, undefined, true,"Ramu", false];
console.log(arr[arr.length - 1]);
console.log(arr5[arr5.length - 1]);
console.log(arr5[arr5.length - 2][2]);
let s = "armeture";
console.log(s[-2]);
console.log(s[s.length - 1]);

// to add and remove elements in array from last we have push and pop method
// to add and remove elements in array from start we have unshift and shift method
// to add and remove elements in array from middle we have splice method
arr.unshift(0);
arr.push(6);
console.log(arr);
arr.shift();
console.log(arr);



// is there any any execution speed difference between push and unshift method
// yes there is a difference in execution speed between push and unshift method. 
// push method adds an element at the end of the array and it takes O(1) time complexity. 
// unshift method adds an element at the beginning of the array and it takes O(n) time complexity because it has to shift all the elements to the right to make space for the new element.


//array splice method syntax: array.splice(start, deleteCount, item1, item2, ...)

arr.splice(2,2); // it will remove 2 elements from index 2
console.log(arr);
arr.splice(2,0,[3,4]);
console.log(arr);

// reverse method is used to reverse the order of the elements in the array
arr.reverse();
console.log(arr);
// sort method is used to sort the elements in the array
arr.sort();
console.log(arr);
// to sort the array in descending order we can use the sort method with a compare function
arr.sort((a,b) => b-a);
console.log(arr);
// to sort the array in ascending order we can use the sort method with a compare function
arr.sort((a,b) => a-b);
console.log(arr);
// to sort the array in alphabetical order we can use the sort method with a compare function
arr2.sort();
console.log(arr2);
// to sort the array in reverse alphabetical order we can use the sort method with a compare function
arr2.sort((a,b) => b.localeCompare(a));
console.log(arr2);
// to sort the array in alphabetical order we can use the sort method with a compare function
arr2.sort((a,b) => a.localeCompare(b));
console.log(arr2);
// what is higher order function in js
// a higher order function is a function that takes another function as an argument or returns a function as a result. 
// examples of higher order functions in js are map, filter, reduce, forEach, etc.


// .length is a property of or method of array which returns the number of elements in the array.
console.log(arr.length);
// .length is a property of or method of string which returns the number of characters in the string.
console.log(s.length);
// .length is a property of or method of object which returns the number of properties in the object.
let obj = { name: 'rittik', age: 24, city: 'kolkata' };
console.log(Object.keys(obj).length);
// .length is a property of or method of function which returns the number of parameters in the function.
function add(a,b) {
    return a+b;
}
console.log(add.length);
//non mutating methods of array are those methods which do not change the original array and return a new array.
// examples of non mutating methods of array are map, filter, reduce, forEach, etc.
// mutating methods of array are those methods which change the original array and return the modified array.
// examples of mutating methods of array are push, pop, shift, unshift, splice, reverse, sort, etc.

// array rferencing 
// spread operator is used to create a new array by copying the elements of an existing array.
let arr6 = [...arr];
console.log(arr6);

// for loop and for..of loop are used to iterate over the elements of an array.
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
for(let element of arr) {
    console.log(element);
}