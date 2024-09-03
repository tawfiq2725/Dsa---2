// SS
function ss(arr){
    let len = arr.length-1
    for(let i=0; i<len; i++){
        let min = i;
        for(let j=i+1; j<=len; j++){
            if(arr[j]>arr[min]){
                min = j
            }
        }
        if(min!==i){
            let temp = arr[i]
            arr[i]  =arr[min]
            arr[min] = temp
        }
    }
    return arr
}
// console.log(ss([9,4,8,5,6,3,9,2,4,5,0,9]));



// BS

function Bs(arr){
    let len = arr.length;
    let swap;
    for(let i=0; i<len-i-1; i++){
        swap = false
        for(let j=0; j<len; j++){
            if(arr[j]<arr[j+1]){
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
// console.log(Bs([1,9,6,3,4,7]));


// IS
function Is(arr){
    for(let i=0; i<arr.length; i++){
        let key = arr[i]
        j=i-1
        while(j>=0 && arr[j]<key){
            arr[j+1] =  arr[j]
            j = j-1
        }
        arr[j+1] = key
    }
    return arr
}
// console.log(Is([6,5,4,788,8,12,3]));


// MS
function merge(arr){
    if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return ms(merge(left),merge(right))
}
function ms(left,right){
    let sort=[] , i=0,j=0;
    while(i<left.length && j<right.length){
        if(left[i]>right[j]){
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
// console.log(merge([6,3,1,4,2,8,7,4,5,2]));

function Qs(arr){
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
    return [...Qs(left),pivot,...Qs(right)]
}
console.log(Qs([1,5,6,3,2,4,7,9,8,222,1]));
