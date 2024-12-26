var minSwaps = function(s) {
    let st = [];
    
    for (let i of s)
        if (i === '[')
            st.push(i); 
        else if (st.length > 0 && st[st.length - 1] === '[')
            st.pop(); 
        else
            st.push(i); 
    
    let unbalancedPairs = st.length / 2;
    let swaps = Math.ceil(unbalancedPairs / 2.0);
    return swaps;
};

console.log(minSwaps("][]["))
console.log(minSwaps("]]][[["))
