console.log("Hello, TypeScript!");

let a: any = 10;
let b: undefined = undefined;
let c: null = null;
let d: boolean = true;
let e: number = 10;
let f: string = "Hello, TypeScript!";
let g: symbol = Symbol("Hello, TypeScript!");
let h: bigint = 10n;

a = 20;
b = a;
c = null;
b = undefined;
// b = 30;


let array: number[] = [1, 2, 3, 4, 5];

let tuple: [string, number] = ["Hello", 10];

// Function to reverse an array

const reverseArr = (array: number[]):number[] => {
    let i =0;
    let j = array.length - 1;
    while(i<j){
        let temp = array[i];
        array[i] = array[j]!;
        array[j] = temp!;
        i++;
        j--;
    }
    return array;
}

console.log(reverseArr(array));

// Function to find the maximum number in an array

const findMax = (arr: number[]): number =>{
    if (arr.length === 0) throw new Error("Array cannot be empty");

    let i: number = 0;
    let max: number = -Infinity;
    while(i< arr.length){
        if(arr[i]!> max){
            max = arr[i]!;
        }
        i++;
    }
    return max;
}

console.log(findMax(array));



const findSecondMax = (arr: number[]): number => {
    let i : number = 0;
    let max : number =  -Infinity;
    let secMax : number = max;


    while (i< arr.length){
        const current = arr[i] ;
        // console.log("current", current);
        // console.log("max",max);
        // console.log(current !== undefined && current> max)       
        if(current !== undefined && current> max){
            secMax = max
            max = current
            // console.log("max", max);
        }else if(current !== undefined && current > secMax){
            secMax = current
            // console.log("secMax", secMax);
        }
        i++;
    }
    return secMax;
}

console.log("secMax",findSecondMax(array));

e = b!
console.log(e);
