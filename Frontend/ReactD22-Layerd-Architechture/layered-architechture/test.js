console.log("test.js file rendering....");

// helper.js




    // let sortHalves=(arr) => {

    //     let n = arr.length

    //     let leftSide = []
    //     let rightSide = []
    //     console.log("arr before sorting:", arr);
    
    //     if(n%2 === 0){
    //         leftSide = arr.slice(0, (n/2))
    //         rightSide = arr.slice(n/2, n)
    //     }
    //     if(n%2 !== 0){
    //         leftSide = arr.slice(0,((n-1)/2))
    //         rightSide = arr.slice((n-1)/2,n)
    //     }

    //     console.log("leftSide before sorting:", leftSide);
    
    //     for (let i = 0; i < leftSide.length - 1; i++){
    //         for(let j = i+1; j < leftSide.length; j++){
    //             console.log(`itteration ${i}${j} start: leftSide[i]:`, leftSide[i], "leftSide[j]:", leftSide[j]);
    //             if(leftSide[i] > leftSide[j]){

    //                 let temp = leftSide[i]
    //                 leftSide[i] = leftSide[j]
    //                 leftSide[j] = temp
    //                 console.log(`itteration ${i}${j} end: leftSide[i]:`, leftSide[i], "leftSide[j]:", leftSide[j]);
    //             }
    //         }
    //     }

    //     console.log("leftSide after sorting:", leftSide);

    //     console.log("rightSide before sorting:", rightSide);
    //     for (let i = 0; i<rightSide.length -1; i++){
    //         for(let j = i+1; j< rightSide.length; j++){
    //             if(rightSide[i] < rightSide[j]){
    //                 console.log(`itteration ${i}${j} start: rightSide[i]:`, rightSide[i], "rightSide[j]:", rightSide[j]);
    //                 let temp = rightSide[i]
    //                 rightSide[i] = rightSide[j]
    //                 rightSide[j] = temp
    //                 console.log(`itteration ${i}${j} end: rightSide[i]:`, rightSide[i], "rightSide[j]:", rightSide[j]);
    //             }
    //         }
    //     }

    //     console.log("rightSide after sorting:", rightSide);
        
    //     // write your code here
    //     let newArr = [...leftSide, ...rightSide]
    //     // console.log("newArr after merging leftSide and rightSide:", newArr);
    //     return newArr
    // }



    // helper.js


    let sortHalves=(arr)=> {

 
        let n = arr.length

        let leftSide = []
        let rightSide = []

    
        if(n%2 === 0){
            leftSide = arr.slice(0, (n/2))
            rightSide = arr.slice(n/2, n)
        }
        if(n%2 !== 0){
            leftSide = arr.slice(0,((n-1)/2))
            rightSide = arr.slice((n-1)/2,n)
        }
    
        for (let i = 0; i < leftSide.length - 1; i++){
            for(let j = i+1; j < leftSide.length; j++){
                if(leftSide[i] > leftSide[j]){
                    let temp = leftSide[i]
                    leftSide[i] = leftSide[j]
                    leftSide[j] = temp
                }
            }
        }

        for (let i = 0; i<rightSide.length -1; i++){
            for(let j = i+1; j< rightSide.length; j++){
                if(rightSide[i] < rightSide[j]){
                    let temp = leftSide[i]
                    leftSide[i] = leftSide[j]
                    leftSide[j] = temp
                }
            }
        }
        
        // write your code here
        // let newArr = []
        // newArr.push(leftSide)
        // newArr.push(rightSide) 

        let newArr = [...leftSide,...rightSide]

        return rightSide
    }







console.log(sortHalves([2, 3, 6, 9, 8, 5, 1])); // [[1,2,3,4],[9,8,7,6]]