class Node{
    constructor(value,priority){
        this.value = value
        this.priority = priority
        this.next = null
    }
}

class PriorityQueue{
    constructor(){
        this.head = null
    }
    isEmpty(){
        return this.head === null
    }
    enqueue(value,priority){
        const node = new Node(value,priority)
        if(this.isEmpty() || this.head.priority<priority){
         node.next = this.head
 
         this.head = node   
        }
        else{
            let curr = this.head
            while(curr.next && curr.next.priority>=priority){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
    }
    dequeue(){
        if(this.isEmpty()){
            console.error('The queue is empty')
            return
        }
        else{
            let removeNode = this.head;
            this.head = this.head.next
            return removeNode
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('error');
        }
        else{
            let list = ` `
            let curr = this.head
            while(curr){
                list = list + `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
    }   
}

const que = new PriorityQueue();
que.enqueue('Task A',1)
que.enqueue('Task B',7)
que.enqueue('Task C',3)
// que.dequeue()
que.print()