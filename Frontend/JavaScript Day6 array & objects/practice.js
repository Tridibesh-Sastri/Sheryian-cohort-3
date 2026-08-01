// forEach method is used to execute a provided function once for each array element. It does not return anything. It is used to perform side effects on each element of the array, such as modifying the elements or performing some action based on their values.
// The forEach method takes a callback function as an argument, which is executed for each element in the array. The callback function can take three arguments: the current element being processed, the index of the current element, and the array itself.

// Example of using forEach method
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(a, b, c,d) {
    console.log(a, b, c, d);
});

let a = ()=>{
    console.log("Hello");
}
a(1, 2, 3, 4); // output: Hello
// how a foreach dynamically puting the values in the parameters of the function
// The forEach method dynamically assigns the values of the current element, index, and array to the parameters of the callback function. When the forEach method is called on an array, it iterates through each element of the array and calls the callback function for each element. The first parameter of the callback function receives the value of the current element being processed, the second parameter receives the index of that element, and the third parameter receives the entire array. This allows you to access and manipulate each element of the array within the callback function.

// map method is used to create a new array by calling a provided function on every element in the calling array. It returns a new array with the results of calling the provided function on every element in the original array. The map method does not modify the original array.
// The map method takes a callback function as an argument, which is executed for each element in the array. The callback function can take three arguments: the current element being processed, the index of the current element, and the array itself.   
// how map function returns a new array
const numbers1 = [1, 2, 3, 4, 5,33,55,66,77,88,99,100,111,122,133,144,155,166,177,188,199,200];
const squaredNumbers = numbers1.map(function(num) {
    return num * num;
});

console.log(squaredNumbers); // output: [1, 4, 9, 16, 25]


let s = "";
for (let i = 0; i < numbers1.length; i++) {
    if(i<4 || i>=numbers1.length -4) {
        s += " " + numbers1[i];
    }
}
console.log(s);