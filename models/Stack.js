import { Node } from "./Node.js";

export class Stack {
    constructor() {
        this.top = null; 
        this.length = 0; 
    }

    push(value) {
        const newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top; 
        }
        this.top = newNode; 
        this.length++;
    }

    pop() {
        if (this.top == null) {
            return null; 
        }
        const value = this.top.value; 
        this.top = this.top.next; 
        this.length--;
        return value;
    }

    
    peek() {
        if (this.top == null) {
            return null; 
        }
        return this.top.value;
    }

    
    isEmpty() {
        return this.length === 0;
    }

    
    size() {
        return this.length;
    }
}
