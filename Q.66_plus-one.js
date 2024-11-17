var plusOne = function(digits) {
    let ans=[...digits];
    let n = digits.length;

    for(i = n -1;i>=0;i--){
        if(ans[i]<9){
            ans[i]+= 1;
            return ans;
        }
        ans[i]=0;
    }
    ans=[1,...ans]
    return ans;
}

console.log(plusOne([1,2,3]))
