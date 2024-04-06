import { Stack } from './Stack.js';

export class InfixToPrefix {
    constructor() {
    }

    convert(expression) {
        let stack = new Stack();
        let result = [];
        let exp = expression.split('').reverse(); 

        
        exp = exp.map(c => c == '(' ? ')' : c == ')' ? '(' : c);

        for (let i = 0; i < exp.length; i++) {
            let c = exp[i];

            
            if (!this.isOperator(c) && c != '(' && c != ')') {
                result.push(c);
            } else if (c == '(') {
                stack.push(c);
            } else if (c == ')') {
                while (!stack.isEmpty() && stack.peek() != '(') {
                    result.push(stack.pop());
                }
                stack.pop(); 
            } else {
                while (!stack.isEmpty() && this.precedence(c) <= this.precedence(stack.peek())) {
                    result.push(stack.pop());
                }
                stack.push(c);
            }
        }

        
        while (!stack.isEmpty()) {
            result.push(stack.pop());
        }

        return result.reverse().join(''); 
    }

    
    isOperator(c) {
        return ['+', '-', '*', '/', '^'].indexOf(c) >= 0;
    }

    precedence(c) {
        if (c == '^') return 3;
        else if (c == '*' || c == '/') return 2;
        else if (c == '+' || c == '-') return 1;
        else return -1;
    }
}
