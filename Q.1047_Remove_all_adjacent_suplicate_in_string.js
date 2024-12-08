var removeDuplicates = function(s) {
    s=s.trim().split("")
 let arr=[]
    for(char of s){
        if(arr.length && arr[arr.length-1]===char){
            arr.pop()
        }
        else{
            arr.push(char)
        }
    }
    console.log(arr.join(""))
};


console.log(removeDuplicates("abbaca"))