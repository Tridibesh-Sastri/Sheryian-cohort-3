let a = 10;
let b = 20;
a += b; // a = a + b
b = a -b;
a = a - b;
console.log('value of a is: ' +a);
console.log('value of b is: ' +b);

function sum(a, b) {
    // Write your logic here
    return a+b;

}

module.exports = {sum}
console.log(sum(10, 20));