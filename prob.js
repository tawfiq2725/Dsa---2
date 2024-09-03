class LinearHash{
    constructor(size){
      this.array = new Array(size).fill(null);
      this.size = size
    }
  
    hashGen(key){
      let hash = 0;
      for(let i=0; i<key.length; i++){
        hash = (hash + key.charCodeAt(i)) % this.size
      }
      return hash;
    }
  
    insertValue(key, value){
        let index = this.hashGen(key);
        let startIndex = index;
        while(this.array[index] !== null){
           index = (index+1) % this.size;
           if(index === startIndex){
              console.log("Hash Table is full");
             return;
           }
        }
      this.array[index] = [key, value];
    }
  
    print()
    {
      for(let i=0; i<this.array.length; i++){
          if(this.array[i]){
            console.log(i, this.array[i])
          }
      }
    }}
  
  
  const testHash = new LinearHash(7);
  testHash.insertValue('name', 'app');
  testHash.insertValue('name', 'appli');
  testHash.insertValue('names', 'appcaf');
  testHash.insertValue('names', 'appcaf');
  testHash.insertValue('names', 'appcaf');
  testHash.insertValue('names', 'appcaf');
  testHash.insertValue('names', 'appcaf');
  testHash.insertValue('names', 'appcaf');
  
  testHash.print()
  

  
  const { KeyObject } = require("crypto");

class HashQuadratic{
  constructor(size){
    this.array = new Array(size).fill(null);
    this.size = size; 
  }

  hash(key){
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  insertQuad(key, value){
      let index = this.hash(key);
    let i=1;
      let startIndex = index;
     while(this.array[index] !== null){
       index = (index+ i*i) % this.size;
       i++;
       if(startIndex === index){
         console.log('Hash gets full');
         return;
       }
     }
    this.array[index] = [key, value];
  }

  print(){
    for(let i=0; i<this.array.length; i++){
      if(this.array[i]){
        console.log(i, this.array[i])
      }
    }
  }
  
}

const Ht  = new HashQuadratic(10)
Ht.insertQuad('name', 'app')
Ht.insertQuad('name', 'app')
Ht.insertQuad('name', 'app')
Ht.insertQuad('name', 'app')
Ht.print();






