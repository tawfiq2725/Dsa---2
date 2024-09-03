// Hashing

class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0; i<key.length;i++){
            total = total + key.charCodeAt(i)
        }
        return total%this.size
    }
    insert(key,value){
        let index = this.hash(key)
        this.table[index] = value
    }
    search(key){
        let index  = this.hash(key)
        return this.table[index] 
    }
    delete(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table = new Hashtable(5)
table.insert('am','ammu')
table.insert('dm','dmmu')
table.insert('qm','qmmu')
table.insert('em','emmu')
table.insert('vm','vmmu')
// console.log( table.search('am'));
table.delete('vm')
// table.display()



// Hashtable collision prevent

class HT{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total = total+key.charCodeAt(i)
        }
        return total%this.size
    }
    insert(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            bucket = [[key,value]]
        }else{
            let sameKeyvalue = bucket.find(item=>item[0]===key)
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
            let sameKeyvalue = bucket.find(item=>item[0]===key)
            if(sameKeyvalue){
                return sameKeyvalue[1]
            }
        }
        return undefined
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


}

const ht = new HT(10)