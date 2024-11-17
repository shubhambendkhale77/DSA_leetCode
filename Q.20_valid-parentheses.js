var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];

        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        } else if ((s[i] == ")" && top == "(") || 
                   (s[i] == "}" && top == "{") || 
                   (s[i] == "]" && top == "[")) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}"))