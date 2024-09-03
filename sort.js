// Selection sort
// Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 
function selectionSort(arr){
    // array length
    let len = arr.length-1
    // Loop
    for(let i=0; i<len; i++){
        // base
        let min = i
        // Comparing other numbers
        for(let j=i+1; j<=len; j++){
            // To find minimum index elements
            if(arr[j]<arr[min]){
                // assign minimum value (j) to min
                min = j
            }
        }
        // Here to check min index is not equal to i
        if(min!==i){
            // swap using temp
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp 
        }
    }
    return arr
}
// console.log(selectionSort([2,7,1,3,9,4]));

// Complexity - O(N^2)

// Advantages of Selection Sort Algorithm
// Simple and easy to understand.
// Works well with small datasets.


// Disadvantages of the Selection Sort Algorithm
// Selection sort has a time complexity of O(n^2) in the worst and average case.
// Does not work well on large datasets.

// Applications of Selection Sort Algorithm
// Mainly works as a basis for some more efficient algorithms like Heap Sort. Heap Sort mainly uses Heap Data Structure along with the Selection Sort idea.
// Used when memory writes (or swaps) are costly for example EEPROM or Flash Memory. When compared to other popular sorting algorithms, it takes relatively less memory writes (or less swaps) for sorting. But Selection sort is not optimal in terms of memory writes, cycle sort even requires lesser memory writes than selection sort.
// Simple technique and used to introduce sorting in teaching.
// Used as a benchmark for comparison with other algorithms.
// Frequently Asked Questions on Selection Sort

// Q1. Is Selection Sort Algorithm stable?
// The default implementation of the Selection Sort Algorithm is not stable. However, it can be made stable. Please see the stable Selection Sort for details.

// Q2. Is Selection Sort Algorithm in-place?
// Yes, Selection Sort Algorithm is an in-place algorithm, as it does not require extra space.


// --------------------------------------------------------------------------------------------------------------------

function bs(arr){
    let n = arr.length-1
    let swap;

    for(let i=0; i<n-1; i++){
        swap = false

        for(let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            swap = true
        }

        if(!swap){
            break
        }
    }
    return arr
}
// console.log(bs([3,6,4,9,8,1,5,7]));





function is(arr){
    for(let i=1; i<arr.length; i++){
        let a = arr[i]
        let j =i-1
        while(j>=0 && arr[j]>a){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = a
    }
    return arr
}
// console.log(is([1,2,3,4,5,6,9,8,7,6,5,4,3]));


function ms(arr){
    if(arr.length<=1){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(ms(left),ms(right))
}

function merge(left,right){
    let sort = []
    let i=0,j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            sort.push(left[i])
            i++
        }
        else{
            sort.push(right[j])
            j++
        }
    }
    return sort.concat(left.slice(i)).concat(right.slice(j))
}
// console.log(ms([6,4,7,3,8,2,9]));



// function ms(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)  
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid) 

//     return merge(ms(left),ms(right))
// }

// function merge(left,right){
//     let sort = []
//     let i=0 , j=0;
//  while(i<left.length && j<right.length){
//     if(left[i]<right[j]){
//         sort.push(left[i])
//         i++
//     }   
//     else{
//         sort.push(right[j])
//         j++
//     }
//     return sort.concat(left.slice(i)).concat(right.slice(j))
// }   
// }
// console.log(ms([6,5,7,4,8,9,2,1]));



function ms(arr){
    if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right  = arr.slice(mid)

    return merge(ms(left),ms(right))
}

function merge(left,right){
    let sort = []
    let i=0,j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            sort.push(left[i])
            i++
        }
        else{
            sort.push(right[j]);
            j++
        }
    }
    
    return sort.concat(left.slice(i)).concat(right.slice(j))
}
console.log(ms([4,7,8,9,3,9,2,4,1]));
