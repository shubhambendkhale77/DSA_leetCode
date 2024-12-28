var findLUSlength = function(a, b) {
    return (a==b)?-1:Math.max(a.length,b.length)
};

console.log(findLUSlength("aba","cdc"))