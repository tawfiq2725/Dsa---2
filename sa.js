// Stack - Datastructure using Array


// class Stack{
//     constructor(){
//         this.items = []
//     }
//     insert(data){
//         return this.items.push(data)
//     }
//     delete(){
//         return this.items.pop()
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     top(){
//         return this.items[this.items.length-1]
//     }
//     size(){
//         return this.items.length
//     }   
//     print(){
//         console.log(this.items);
//     }
// }

// const array = new Stack()

// array.insert(10)
// array.insert(20)
// array.insert(30)
// array.insert(40)
// array.insert(50)
// array.delete()
// console.log( array.isEmpty());
// console.log(
//     array.top());
//     console.log(array.size());
// array.print()




class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
    }
    isEmpty(){
        return this.head === null
    }

    push(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
    }
    pop(){
        let deleteNode = this.head
        this.head = deleteNode.next
        return deleteNode
    }
    peek(){
        if(this.isEmpty()){
            console.log('error');
        }
        else{
            return this.head.value
        }
        
    }
    display(){
        let curr = this.head
            while(curr){
                console.log(curr.value);
                curr  = curr.next
            }
    }
}