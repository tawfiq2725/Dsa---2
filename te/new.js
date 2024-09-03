// Quick Sort


let array = [3,5,8,1,2]

function Quicksort(arr){

    // Check len
    if(arr.length<=1){
        return arr
    }

    // Pivot
    let Pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr = []

    // Loop condition
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<Pivot){
            leftArr.push(arr[i])
        }
        else{
            rightArr.push(arr[i])
        }
    }

    // Return array
    return [...Quicksort(leftArr), Pivot , ...Quicksort(rightArr)]
}

console.log(Quicksort(array))
