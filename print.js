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
  
    enqueue(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.front = node
        this.rear = node
      }
      else{
        this.rear.next = node
        this.rear = node
      }
    }
  
    dequeue(){
      if(this.isEmpty()){
        console.log('Error')
      }
      else{
        let remove = this.front
        this.front = this.front.next
        return remove
      }
    }
  
    peek(){
      if(this.isEmpty()){
        console.log('Empty')
      }
      else{
        return this.front.value
      }
    }
  
    print(){
      let curr = this.front
      while (curr) {
        console.log(curr.value)
        curr = curr.next
      }
    }
    
  }
  
  const queue = new Queue()
  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)
  queue.enqueue(40)
  queue.enqueue(50)
  queue.enqueue(60)
  queue.dequeue()
  queue.print()