// maxOccurences


function maxOccurences(arr){
    let obj = {}

    for(let a of arr){
        if(obj[a]){
            obj[a]++
        }
        else{
            obj[a] = 1
        }
    }

    let macOccured = 0
    let maxTimes = 0

    for(let key in obj){
        if(obj[key]>maxTimes){
            macOccured = key
            maxTimes = obj[key]
        }
    }
    console.log(maxTimes);
    
    return macOccured
}

// console.log(maxOccurences(array));

let array = [12,3,4,5,6,76,78,3,12,12,8,8,8,8,89,2,7,7,7,7,7,7,1,1,2]

function leastOccurence(arr){
    let obj = {}
 
    for(let a of arr){
        if(obj[a]){
            obj[a]++
        }
        else{
            obj[a] = 1
        }
    }
    
    let leastOccured = arr[0]
    let leastTimes = obj[leastOccured]

    for(let key in obj){
        if(obj[key]<leastTimes){
            leastOccured = key
            leastTimes = obj[key]
        }
    }
    return leastOccured
}
console.log(leastOccurence(array));



function some(s1,s2){
    let strnlen = s1.length
    let new1 = s1.toLowerCase().split('').sort().join('')
    let anagrams = []
    
    for(let i=0; i<s2.length; i++){
        let substring = s2.slice(i,i+strnlen);
        let match = substring.toLowerCase().split('').sort().join('')
        if(new1 === match){
            anagrams.push(substring)
        }
    }
    return anagrams

}
console.log(some('post','stoptopspotslhgf'));
