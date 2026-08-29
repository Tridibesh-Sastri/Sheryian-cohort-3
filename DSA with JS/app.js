// all way of declaring an array in js

// 1. using array literal
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// 2. using Array constructor
let arr1 = new Array(10).fill(0);
console.log(arr1);
// 3. using Array.of()
let arr2 = Array.of(1, 2, 3, 4, 5);
console.log(arr2);
// 4. using Array.from()
let arr3 = Array.from('hello');
console.log(arr3);
// 5. using Array.of() with spread operator
let arr4 = Array.of(...[1, 2, 3, 4, 5]);
console.log(arr4);
// 6. using Array.from() with map function
let arr5 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr5);
// 7. using Array.from() with a string
let arr6 = Array.from('world');
console.log(arr6);
// 8. using Array.from() with a Set
let set = new Set([1, 2, 3, 4, 5]);
let arr7 = Array.from(set);
console.log(arr7);
// 9. using Array.from() with a Map
let map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
let arr8 = Array.from(map);
console.log(arr8);
// 10. using Array.from() with a generator function
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
let arr9 = Array.from(generator());
console.log(arr9);

// 11. using Array.from() with a custom iterable object
let iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};
let arr10 = Array.from(iterable);
console.log(arr10);

// 12. using Array.from() with a custom iterable object and map function
let arr11 = Array.from(iterable, x => x * 2);
console.log(arr11);

// 13. using Array.from() with a custom iterable object and map function and thisArg
let arr12 = Array.from(iterable, function(x) {
  return x * this.multiplier;
}, { multiplier: 3 });
console.log(arr12);

// 14. using Array.from() with a custom iterable object and map function and thisArg and index
let arr13 = Array.from(iterable, function(x, index) {
  return x * this.multiplier + index;
}, { multiplier: 4 });
console.log(arr13);
// 15. using Array.from() with a custom iterable object and map function and thisArg and index and array
let arr14 = Array.from(iterable, function(x, index, array) {
  return x * this.multiplier + index + array.length;
}, { multiplier: 5 });
console.log(arr14);
// 16. using Array.from() with a custom iterable object and map function and thisArg and index and array and array length
let arr15 = Array.from(iterable, function(x, index, array) {
  return x * this.multiplier + index + array.length + array.length;
}, { multiplier: 6 });
console.log(arr15);
// 17. using Array.from() with a custom iterable object and map function and thisArg and index and array and array length and array length and array length
let arr16 = Array.from(iterable, function(x, index, array) {
  return x * this.multiplier + index + array.length + array.length + array.length;
}, { multiplier: 7 });
console.log(arr16);
// 18. using Array.from() with a custom iterable object and map function and thisArg and index and array and array length and array length and array length and array length
let arr17 = Array.from(iterable, function(x, index, array) {
  return x * this.multiplier + index + array.length + array.length + array.length + array.length;
}, { multiplier: 8 });
console.log(arr17);
// 19. using Array.from() with a custom iterable object and map function and thisArg and index and array and array length and array length and array length and array length and array length
let arr18 = Array.from(iterable, function(x, index, array) {
  return x * this.multiplier + index + array.length + array.length + array.length + array.length + array.length;
}, { multiplier: 9 });
console.log(arr18);
// 20. using Array.from() with a custom iterable object and map function and thisArg and index and array and array length and array length and array length and array length and array length and array length 
let arr19 = Array.from(iterable, function(x, index, array) {
  return x * this.multiplier + index + array.length + array.length + array.length + array.length + array.length + array.length;
}, { multiplier: 10 });
console.log(arr19);
