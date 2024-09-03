// function ss(arr) {
//     let n = arr.length
//     for(let i=0; i<n-1; i++){
//         let min = i
//         for(let j=i+1; j<=n-1; j++){
//             if(arr[min]>arr[j]){
//                 min = j
//             }
//         }   
//         if(min !== i){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//     }
//     return arr
// }
// console.log(ss([2,7,8,4,3,1]));



// function ss(arr){
//     let len = arr.length;
//     for(let i=0; i<len-1; i++){
//         let min = i

//         for(let j=i+1; j<=len-1; j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
        
//         if(min !== i){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }

//     }
//     return arr
// }
// console.log(ss([9,8,7,6,5,4,1,2,3,4,5,6]));


// function bs(arr){
//     let len = arr.length
//     let swap;

//     for(let i=0; i<len; i++){
//          swap = false

//         for(let j=0; j<len-i-1; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//             swap = true
//         }

//         if(!swap){
//             break
//         }
//     }
//     return arr
// }




// function bs(arr){
//     let len = arr.length
//     let swap;

//     for(let  i=0; i<len; i++){
//         swap = false

//         for(let j=0; j<len-i-1; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp 
//             }
//             swap = true
//         }
//         if(!swap){
//             break
//         }
//     }
//     return arr
// }


// console.log(bs([9,8,7,2,3,4,5,6,7,6,5,4,2,2,2,2,2,2,2,2,2,23,4]));
