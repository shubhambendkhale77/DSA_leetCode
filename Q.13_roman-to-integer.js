var romanToInt = function(s) {
    let myMap={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
let result = 0;
    for(i=0;i<s.length;i++){
        let currVal= myMap[s[i]]
        let nextVal = myMap[s[i+1]]
        if(currVal < nextVal){
            result+= nextVal-currVal;
            i++;
        }
        else{
            result += currVal; 

        }
    }
    return result;
};

console.log(romanToInt("III"))