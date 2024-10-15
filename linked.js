class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }




    print(){
        if(this.isEmpty()){
            console.log('Empyt');
            
        }
        else{
            let curr = this.head
            let list = ''
            while(curr){
                list = list + ` ${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
    }
}

const link = new Linkedlist()
link.prepend(10)
link.prepend(20)
link.prepend(30)
link.prepend(40)
link.append(20)
link.append(30)
link.append(40)
link.append(50)
link.print()
