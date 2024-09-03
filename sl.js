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
        const node = new Node(value)
        if(this.isEmpty()){
            this.head  =  node
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
        return this.head.value
    }
    display(){
        let curr = this.head
        while(curr){
            console.log(curr.value);
            
            curr = curr.next
        }
        
    }

}

const st = new Stack()
st.push(10)
st.push(20)
st.push(30)
st.push(40)
st.push(50)
st.display()