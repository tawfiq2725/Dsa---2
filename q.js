class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class Queue{
    constructor(){
      this.front = null
      this.rear = null
    }
  
    isEmpty(){
      return this.front === null
    }
  
    // Enqueue
    
    enqueue(val){
      const node = new Node(val)
      if(this.isEmpty()){
        this.front = node
        this.rear = node
      }
      else{
        this.rear.next = node
        this.rear = node
      }
    }
  
    // Dequeue
  
    dequeue(){
      if(this.isEmpty()){
        console.log("Error")
      }
      
        let dequE = this.front
        this.front = this.front.next
        if(this.front === null){
          this.rear = null
        }
      
      return dequE
    }
  
    // 
    top(){
      if(this.isEmpty()){
        console.log("error")
      }
      return this.front.value
    }  
  
    print(){
      let curr = this.front
      let list = ` `
      while(curr){
        list += `${curr.value} `
        curr = curr.next
      }
      console.log(list)
    }
  }
  
  const q = new Queue()
  q.enqueue(10)
  q.enqueue(20)
  q.enqueue(30)
  q.enqueue(40)
  q.dequeue()
  console.log(q.top())
  q.print()