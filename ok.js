function maxOccur(str){
    let obj = {}
    for (let name of str) {
      if(obj[name]){
        obj[name]++  
      }
      else{
       obj[name] = 1 
      }
    }
  
    let max = 0;
    let maxChar;
  
    for(let key in obj){
     if(obj[key]>max){
       max = obj[key]
       maxChar = key
     } 
    }
  
    return maxChar
  }
  console.log(maxOccur('tawfieeeeeeeeeeeqsirajudeennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn'))