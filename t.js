// Quick Sort

function QuickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)]
}
// console.log(QuickSort([6,5,7,8,4,9,3,2,0,34,9,8]));



function MergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return ms(MergeSort(left),MergeSort(right))
}

function ms(left,right){
    let sort=[] , i=0 , j=0;
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
// console.log(MergeSort([7,5,8,4,9,3,4,7,5,8,4,9,8,5]));






function ms(arr){
    if(arr.length<=1){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return Ms(ms(left),ms(right))
}

function Ms(left,right){
    let sort=[],i=0,j=0;
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

// console.log(ms([0,2,3,9,4,8,7,6,4,7,8,2,3,7,4,6,3]));




function qs(arr){

    if(arr.length<=1){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...qs(left),pivot,...qs(right) ]
}
// console.log(qs([0,4,3,9,8,3,6,5,4,8,3,7,3,89,7,4,6]));



function selectionSort(arr){
    let len = arr.length-1
    for(let i=0; i<len; i++){
        let min = i
        for(let j=i+1; j<=len; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min!==i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}
// console.log(selectionSort([5,6,7,4,8,3,9,8,4,7]));

function ss(arr){
    let len  = arr.length-1
    for(let i=0; i<len; i++){
        let max = i
        for(let j=i+1; j<=len; j++){
            if(arr[j]>arr[max]){
                max = j
            }
        }
        // swap
        if(max!==i){
            let temp = arr[i]
            arr[i] = arr[max]
            arr[max] = temp
        }
    }
    return arr   
}
// console.log(ss([7,5,9,8,3,4,0,2,4,8]));


function bs(arr){
    let len = arr.length   
    let swap;
    for(let i=0; i<len-i-1; i++){
        swap = false
        for(let j=0; j<len; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        swap =true
        if(!swap){
            break
        }
    }
    return arr
}
// console.log(bs([1,3,4,7,8,7,6,5,4,3]));


function is(arr){
    for(let i=1; i<arr.length; i++){
        let a = arr[i]
        let j = i-1

        while(j>=0 && arr[j]>a){
            arr[j+1] = arr[j]
            j=j-1           
        }
        arr[j+1] =a
    }
    return arr
}
// console.log(is([8,6,5,9,4,3,4,0,3,5]));



function is(arr){
    for(let i=1; i<arr.length; i++){
        let a = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>a){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = a
    }
    return arr
}
console.log(is([8,6,5,9,4,3,4,0,3,5]));
