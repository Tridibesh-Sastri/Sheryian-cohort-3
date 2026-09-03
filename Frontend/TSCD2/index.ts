let a: number = 2;
let a1: number = 5;
let b: string = "8";

const sum1 = a + b;
const sum2 = b + a;

// a = "8"
console.log(sum1); // Output: "58" (string concatenation)
console.log(typeof sum1); // Output: "string" (string concatenation)
console.log(sum2); // Output: "85" (string concatenation)
console.log(typeof sum2); // Output: "string" (string concatenation)
let condition = a >= 10 ? "Greater than 10" : "Less than or equal to 10";
console.log(condition); // Output: "Less than or equal to 10"

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5


const number = 9002739098
const number2 = 8597070065

let  findSecondGreatestElement =  (arr: number[]): number => {
    // Write your logic here

    let max: number = arr[0]!
    let secMax: number = -Infinity

    let i = 1;

    while(i<arr.length){
        if(arr[i]!>max!){
            secMax = max
            max = arr[i]!
            // console.log("max", max)
            // console.log("secMax", secMax)
        }else if(arr[i]! > secMax && arr[i]!<max){
            secMax = arr[i]!
            // console.log("secMax", secMax)
        }

        console.log(`iteration ${i}: max = ${max}, secMax = ${secMax}`)
        i++
    }

    return secMax
}

console.log(findSecondGreatestElement([2, 3, 1, 5, 4])); // Output: 4
console.log(findSecondGreatestElement([1, 2, 3, 4, 5])); // Output: 4