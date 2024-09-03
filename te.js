// class HT{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0; i<key.length; i++){
//             total = total + key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             bucket = [[key,value]]
//         }
//         else{
//             let sameKeyvalue = bucket.find(item=>item[0])
//             if(sameKeyvalue){
//                 sameKeyvalue[1] = value
//             }
//             else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKeyvalue = bucket.find(item=>item[0])
//             if(sameKeyvalue){
//                 return sameKeyvalue[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKeyvalue = bucket.find(item=>item[0])
//             if(sameKeyvalue){
//                 bucket.splice(bucket.indexOf(sameKeyvalue),1) 
//             }
//         }
//     }
// }

// const a = new HT(10) 



class HT{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total = total + key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            bucket = [[key,value]]
        }
        else{
            let sameKeyvalue = bucket.find(item=>item[0])
            if(sameKeyvalue){
                sameKeyvalue[1] = value                
            }
            else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyvalue = bucket.find(item=>item[0])
            if(sameKeyvalue){
                return sameKeyvalue[1]
            }
        }
    }
    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyvalue = bucket.find(item=>item[0])
            if(sameKeyvalue){
                bucket.splice(bucket.indexOf(sameKeyvalue),1)
            }
        }
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table){
                console.log(i,this.table[i]);
            }
        }
    }
}
const a = new HT(10)
a.set('sd','tawfiq')
a.display()