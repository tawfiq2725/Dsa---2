class Queue{
    constructor(){
      this.items = []
    }
  
    enqueue(val){
      this.items.push(val)
    }
  
    dequeue(){
      return  this.items.shift()
    }
  
    peek(){
      return this.items[0]
    }
  
    isEmpty(){
      return this.items.length === 0
    }
  
    size(){
      return this.items.length
    }
  
    print(){
      for(let i=0; i<this.items.length; i++){
        console.log(this.items[i])
      }
    }
    
  }
  
  const que = new Queue()
  que.enqueue(1)
  que.enqueue(1)
  que.enqueue(1)
  que.enqueue(1)
  que.enqueue(1)
  que.enqueue(1)
  que.enqueue(1)
  que.enqueue(1)
  que.enqueue(1)
  que.print()

















  // class Queue{
//   constructor(){
//     this.items = []
//   }

//   enqueue(val){
//     this.items.push(val)
//   }

//   dequeue(){
//     return  this.items.shift()
//   }

//   peek(){
//     return this.items[0]
//   }

//   isEmpty(){
//     return this.items.length === 0
//   }

//   size(){
//     return this.items.length
//   }

//   print(){
//     for(let i=0; i<this.items.length; i++){
//       console.log(this.items[i])
//     }
//   }

// }

// const que = new Queue()
// que.enqueue(1)
// que.enqueue(1)
// que.enqueue(1)
// que.enqueue(1)
// que.enqueue(1)
// que.enqueue(1)
// que.enqueue(1)
// que.enqueue(1)
// que.enqueue(1)
// que.print()


// // function removeDup(que){
// //   let obj = {}
// //   let newAr = new Queue()
// //   for(let i=0; i<que.length; i++){
// //     if(!obj[que[i]]){
// //       obj[que[i]] = true
// //       newAr.enqueue(que[i])
// //     }
// //   }
// //   return newAr
// // }
// // console.log(removeDup([1,1,2,1,3,4,5]))
















// function duplicate(str){
//   let obj = {}
//   let result = ``
//   for(let i=0; i<str.length; i++){
//     if(!obj[str[i]]){
//       obj[str[i]] = true
//       result = result + str[i]
//     }
//   }
//   return result
// }
// console.log(duplicate(`ramankishore`))
