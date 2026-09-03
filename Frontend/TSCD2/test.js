const copyAndReverseArray = (arr) => {
    // Write your logic here
    let i = 0
    let j = arr.length -1

    // let temp = 0;
    console.log(arr)

    // let seqence = ""

    while(i<=j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
        console.log(`iteration ${i}: i: ${i}, j: ${j}, arr: ${arr}`)
    }
    console.log("hi")
    
    let seqence =""
    console.log(arr)
    seqence = String(arr[0])
    console.log(seqence)
    for(i = 1; i<arr.length; i++){
        seqence += ` ${arr[i]}`
    }

    console.log(seqence)
    return arr
}

console.log(copyAndReverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]



const multiplyPrevNext = (arr) => {
    // Write your logic here
    let newArr = Array(arr.length)

    for (let i=0; i<arr.length; i++){
      if(i==0){
        newArr[i] = arr[i]*arr[i+1]
        continue
      }

      console.log(`iterateion: ${i}`)

      newArr[i] = arr[i-1]*arr[i+1]

      if(i == arr.length -1){
        newArr[i] = arr[i-1]*arr[i]
      }
    }

    return newArr;
  }


console.log(multiplyPrevNext([1, 2, 3, 4, 5])); // Output: [2, 3, 8, 15, 20]