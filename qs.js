// let newe = [65,70,69,73,68,66]
// let newArr=[]
// for (const element of newe) {
//     newArr.push(String.fromCharCode(element))
// }
// console.log(newArr);

// let string = 'tawfiq sirajudeen p'

// function removeDups(str){
//     let obj = {}
//     let result = ''

//     for(let key of str){
//         if(!obj[key]){
//             obj[key] = true
//             result = result + key
//         }
//     }
//     return result
// }
// console.log(removeDups(string));



function quickSort(arr){
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

    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([6,7,5,8,9,4,0,3,2,9,3,8,4]));
