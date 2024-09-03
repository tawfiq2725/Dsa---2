class HT1{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total = total + key.charCodeAt()
        }
        return total%this.size
    }
    set(key,value){
        let index = this.hash(key)
        this.table[index] = value 
    }
    get(key){
        let index = this.hash(key)
        return this.table[index]
    }
    remnove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            console.log(this.table[i]);
        }
    }
}
 const a = new HT1(10)
//  a.set('as','tawfiq')
//  a.set('cd','tafiq')
//  a.set('lk','awfiq')
//  a.display()





class HT2{
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
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }
        else{
            let sameKeyvalue = bucket.find(item=>item[0] === key)
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
    remnove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyvalue = bucket.find(item=>item[0]===key)
            if(sameKeyvalue){
                bucket.splice(bucket.indexOf(sameKeyvalue),1)
            }
        }
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            console.log(this.table[i]);
            
        }
    }
}
const am = new HT2(5)
am.set('name','tawfiq')
am.set('mane','kasim')
am.set('naem','kasim')
am.set('nae','kasim')
console.log( am.get('mss'));

am.display()