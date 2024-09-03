function ss(arr){
    
    for(let i=0; i<arr.length-1;i++){
        let min = i

        for(let j=i+1; j<=arr.length-1; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        if(min !== i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

console.log(ss([2,6,4,1,3,8,9]));
