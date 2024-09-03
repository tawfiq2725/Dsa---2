const { log } = require("console")

class Hashtables{
  constructor(size){
    this.array = new Array(size)
    this.size = size
  }
  hash(key){
    let index = 0
    for(let i=0; i<key.length; i++){
      index+=key.charCodeAt(i)
    }
    return index%this.size
  }
  insert(key,values){
    let index = this.hash(key)
    let bucket = this.array[index]
    if(!bucket){
      this.array[index] = [[key,values]]
    }
    else{
      let sameKeyValue = bucket.find(item=>item[0]===key)
      if(sameKeyValue){
        sameKeyValue[1] = values
      }
      else{
        bucket.push([key,values])
      }
    }
  }
  get(key){
    let index = this.hash(key)
    let bucket = this.array[index]
    if(bucket){
      let sameKeyValue = bucket.find(item=>item[0]===key)
      if(sameKeyValue){
        return sameKeyValue[1]
      }
    }
    return undefined
  }
  remove(key){
    let index = this.hash(key)
    let bucket = this.array[index]
    if(bucket){
      let sameKeyValue = bucket.findIndex(item=>item[0]===key)
      if(sameKeyValue){
        bucket.splice(sameKeyValue,1)
      }
    }
  }
  display(){
    for(let i=0; i<this.array.length; i++){
      if(this.array[i]){
        console.log(i,this.array[i])
      }
    }
  }
}

const Ht = new Hashtables(50)

Ht.insert('name','Tawfiq')
Ht.insert('anme','Siraj')
Ht.insert('naem','Rafiq')
console.log(Ht.get('anme'))  
Ht.remove('anme')
Ht.display()


function removeDuplicates(str){
  let ht = new Hashtables(str.length)
  let result = ''
  for(let i=0; i<str.length; i++){
    if(ht.get(str[i]) === undefined){
      ht.insert(str[i],true)
      result+=str[i]
    }
  }
  return result
}
console.log(removeDuplicates('tawfiq sirajudeen'))

console.log('----------------------------------')

function removeDup(str){
  let obj = {}
  let result = ''
  for(let i=0; i<str.length; i++){
    if(!obj[str[i]]){
      obj[str[i]] = true
      result = result + str[i]
    }
  }
  return result
}
// console.log(removeDup('tawfiqsirajudeen'))


// function longestOccur(str){
//   let curr = ''
//   let long = ''
//   for(let i=0;i<str.length; i++){
//     if(str[i] === str[i-1]){
//       curr += str[i]
//     }
//     else{
//       curr = str[i]
//     }
//     if(curr.length > long.length){
//       long = curr
//     }
//   }
//   return long
// }
// console.log(longestOccur('tawfiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiqsirajudeeeeeeeeeeen'))