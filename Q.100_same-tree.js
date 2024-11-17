var isSameTree = function(p, q) {
return JSON.stringify(p)==JSON.stringify(q)?true:false
};

console.log(isSameTree([1,2,3],[1,2,3]))