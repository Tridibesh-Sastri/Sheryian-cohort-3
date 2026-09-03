// Find max number inside an array

cons findMax = (arr: number[]|undefined[]):number =>{
    let i = 1;
    max = arr[0];
    while(i< arr.length){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

const findSecondMax = (arr[]: nubmer[]):number => {
    let i : number = 0;
    let max : number = arr[0] ?? -infinity;
    let secMax : number = max;

    while (i<arr.length){
        if(arr[i]> max){
            secMax = max
            max = arr[i]
        }else if(arr[i]> secMax){
            secMax = arr[i]
        }
        i++;
    }
    return secMax;
}