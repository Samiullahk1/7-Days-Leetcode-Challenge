function isValid(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char === '(') {
            stack.push(')');
        } else if (char === '{') {
            stack.push('}');
        } else if (char === '[') {
            stack.push(']');
        } else {
            let last = stack.pop();
            if (last !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0;
}
