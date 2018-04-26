class DynamicQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    enqueue(element) {
        let node = new Node(element);
        if(this.length==0)
            this.head = node
            this.tail = node
        else{
            this.head.next = node;
            this.head = node;
    }
        this.length++;
    }

    dequeue(){
        let current = this.tail;
        this.tail = current.next
        current.next = null;
        this.length--;
        return current.element;
        }
        
    }
    front() {
        if(this.length == 0) return -1;
        return this.tail.element;

    }
    back(){
        if(this.length == 0) return -1;
        return this.head.element;

    }
    isEmpty() {
        return this.length===0;

    }
    size() {
        return this.length;

    }
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    print(separator=" - ") {
        let current = this.head.next,
        s this.head.element;
        while(current){
            s+=separator+current.element;
            current = current.next;
        }

    }
}