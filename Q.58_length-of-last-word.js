var lengthOfLastWord = function(s) {
    let trimmedStr = s.trim();
    let lastSpaceIndex = trimmedStr.lastIndexOf(' '); 
    return trimmedStr.length - lastSpaceIndex - 1;
    };

console.log(lengthOfLastWord("Hello World"))