// Selection sort

// Ascending
function selection(arr) {
    let len = arr.length-1
    for(let i=0; i<len; i++){
      let min = i
      for(let j=i+1; j<=len; j++){
        if(arr[j]<arr[min]){
          min = j
        }
      }
      if(min !== i){
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
      }
    }
    return arr
  }
  // console.log(selection([7,5,1,3,2,4]))
  
  // Descending
  function selection(arr) {
    let len = arr.length-1
    for(let i=0; i<len; i++){
      let min = i
      for(let j=i+1; j<=len; j++){
        if(arr[j]>arr[min]){
          min = j
        }
      }
      if(min !== i){
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
      }
    }
    return arr
  }
  // console.log(selection([7,5,1,3,2,4]))
  
  
  
  // Bubble Sort
  
  // Ascending
  
  function bubble(arr) {
    let len = arr.length
    let swap;
    for(let i=0; i<len-1; i++){
      swap = false
      for(let j=0; j<len-i-1; j++){
        if(arr[j]>arr[j+1]){
          let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
        swap = true
      }
      if(!swap){
        break
      }
    }
    return arr
  }
  // console.log(bubble([7,1,9,0,3,7,5,3,4,2]))
  
  // Decending
  
  function bubble(arr) {
    let len = arr.length
    let swap;
    for(let i=0; i<len-1; i++){
      swap = false
      for(let j=0; j<len-i-1; j++){
        if(arr[j]<arr[j+1]){
          let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
        swap = true
      }
      if(!swap){
        break
      }
    }
    return arr
  }
  // console.log(bubble([7,1,9,0,3,7,5,3,4,2]))
  
  
  
  // Insertion Sort
  // For loop start with 1
  // Key
  // Initialize j = i-1
  
  function insertion(arr) {
    for(let i=1; i<arr.length; i++){
      let key=arr[i]
      let j=i-1
      while (j>=0 && arr[j]>key) {
        arr[j+1] = arr[j]
        j = j-1
      }
      arr[j+1] = key
    }
    return arr
  }
  // console.log(insertion([6,7,5,4,8,3,9,0,3]))
  
  
  function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i]
      let j = i-1
      while (j>=0 && arr[j]<key) {
        arr[j+1] = arr[j]
        j = j-1
      }
      arr[j+1] = key
    }
    return arr
  }
  // console.log(insertion([5,7,9,3,0,4,9,2]))
  
  
  // Merge sort
  
  function helper(arr){
    if(arr.length<=1){
      return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
  
    return merge(helper(left),helper(right))
  }
  
  function merge(left,right){
    let sort = [] , i=0 , j=0
    while ( i<left.length && j<right.length ) {
      if(left[i]>right[j]){
        sort.push(left[i])
        i++
      }
      else{
        sort.push(right[j])
        j++
      }
    }
    return sort.concat(left.slice(i)).concat(right.slice(j))
  }
  // console.log(helper([5,9,3,4,8,0,2,8,2]))
  
  
  // Merge sort
  
  function helper(arr){
    if(arr.length<=1){
      return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
  
    return merge(helper(left),helper(right))
  }
  
  function merge(left,right){
    let sort = [] , i=0 , j=0
    while ( i<left.length && j<right.length ) {
      if(left[i]<right[j]){
        sort.push(left[i])
        i++
      }
      else{
        sort.push(right[j])
        j++
      }
    }
    return sort.concat(left.slice(i)).concat(right.slice(j))
  }
  // console.log(helper([5,9,3,4,8,0,2,8,2]))
  
  
  // Quick Sort
  
  function quick(arr) {
    if(arr.length<=1){
      return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
  
    for(let i=0; i<arr.length-1; i++){
      if(arr[i]<pivot){
        left.push(arr[i])
      }
      else{
        right.push(arr[i])
      }
    }
  
    return [...quick(left),pivot,...quick(right)]
  }
  
  // console.log(quick([5,9,7,4,3]))
  
  
  
// Stack - Array
class Stack{
    constructor(){
      this.items = []
    }
  
    push(val){
      this.items.push(val)
    }
  
    pop(){
      return this.items.pop()
    }
  
    peek(){
      return this.items[this.items.length-1]
    }
  
    isEmpty(){
      return this.items.length === 0
    }
  
    print(){
      for(let i=0; i<this.items.length; i++){
        if(this.items[i]){
          console.log(this.items[i])
        }
      }
    }
  }
  
  const stack = new Stack()
  
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  stack.push(5)
  stack.print()  


  // Stack - Linked List

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
        this.head =node
      }
      else{
        node.next = this.head
        this.head = node
      }
    }
  
    pop(){
      if (this.isEmpty()) {
        console.log('Error')
      }
      else{
        let remove = this.head
        this.head = this.head.next
        return remove.value
      }
    }
  
    peek(){
      if (this.isEmpty()) {
        console.log('Error')
      }
      else{
       return this.head.value 
      }
    }
  
    print(){
      let curr = this.head
      while(curr){
        console.log(`${curr.value} `)
        curr = curr.next
      }
    }
    
  }
  const stacks = new Stack()
  stacks.push(1)
  stacks.push(2)
  stacks.push(3)
  stacks.push(4)
  stacks.push(5)
  stacks.push(6)
  stacks.print()


// Queue Implementation in ARRAY
  class Queue{
    constructor(){
      this.items = []
    }
    isEmpty(){
     return this.items.length === 0 
    }
    enqueue(val){
      this.items.push(val)
    }
    dequeue(){
      return this.items.shift()
    }
    peek(){
      return this.items[0]
    }
    size(){
      return this.items.length
    }
    print(){
      for (let i = 0; i < this.items.length; i++) {
        console.log(this.items[i])
      }
    }
  }
  
  const que = new Queue()
  que.enqueue(10)
  que.enqueue(20)
  que.enqueue(30)
  que.enqueue(40)
  que.enqueue(50)
  que.print()

  class Hashtable{
    constructor(size){
      this.array = new Array(size)
      this.size = size
    }
  
    hash(key){
      let index  = 0;
      for(let i=0; i<key.length; i++){
        index = index + key.charCodeAt(i)
      }
      return index%this.size
    }
  
    insert(key,value){
      let index = this.hash(key)
      let bucket = this.array[index]
      if(!bucket){
        this.array[index] = [[key,value]]
      }
      else{
        let sameKeyValue = bucket.find(item=>item[0] === key )
        if(sameKeyValue){
          sameKeyValue[1] = value  
        }
        else{
         bucket.push([key,value]) 
        }
      }
    }
  
    print(){
      for (let index = 0; index < this.array.length; index++) {
        if(this.array[index]){
          console.log(index , this.array[index])
        }
      }
    }
  
    
  }
  
  const ht = new Hashtable(10)
  ht.insert('name','Tawfiq')
  ht.insert('neam','Tawfiq')
  ht.insert('naem','Tawfiq')
  ht.print()



  class LinearProb{
    constructor(size){
      this.array = new Array(size).fill(null)
      this.size = size
    }
  
    hash(key){
      let index = 0
      for(let i=0; i<key.length; i++){
        index = index + key.charCodeAt(i)
      }
      return index%this.size
    }
  
    insert(key,value){
      let index = this.hash(key)
      let si = index
      while (this.array[index] !== null) {
        index = (index + 1)%this.size
        if(si === index){
         console.log('Hashtable full') 
          return;
        }
      }
      this.array[index] = [key,value]
    }
  
    print(){
      for (let index = 0; index < this.array.length; index++) {
        if(this.array[index]){
          console.log(index,this.array[index])
        }
      }
    }
  
    
  }
  
  const htw = new LinearProb(10)
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.insert('name','Tawfiq')
  htw.print()









  class Quad{
    constructor(size){
      this.array = new Array(size).fill(null)
      this.size = size
    }
  
    hash(key){
      let index = 0
      for(let i=0; i<key.length; i++){
        index = index + key.charCodeAt(i)
        
      }
      return index%this.size
    }
  
    insert(key,value){
      let index = this.hash(key)
      let i=1
      let si = index
      while (this.array[index] !== null) {
        index = (index + i*i)%this.size
        if(si === index){
          console.log('Hash tabel full')
          return
        }
      }
      this.array[index] = [key,value]
    }
  
    print(){
      for(let i=0; i<this.array.length; i++){
        if(this.array[i]){
          console.log(i,this.array[i])
        }
      }
    }
  }
  
  
  const quad = new Quad(10)
  quad.insert('name','Tawfiq')
  quad.insert('name','Tawfiq')
  quad.insert('name','Tawfiq')
  quad.insert('name','Tawfiq')
  quad.print()