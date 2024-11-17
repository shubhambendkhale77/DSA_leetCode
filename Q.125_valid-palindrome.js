var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let temp = "";
    for (i = s.length - 1; i >= 0; i--) {
        temp += s[i]
    }
    if (temp == "") {
        return true
    }
    if (temp == s) {
        return true
    }
    return false
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))