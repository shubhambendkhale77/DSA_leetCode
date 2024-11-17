var myAtoi = function(s) {
    let max=Math.pow(2,31)-1;
    let min=-Math.pow(2,31)

    let charArray = s.trim().split('');


    var index=0;
    var sign=1;
    var ans=0;

    if(charArray[index]=='-'|| charArray[index]=='+'){
        (charArray[index]=='-')?sign= -1:sign = 1;
        index++
    }

    while(index<charArray.length && /\d/.test(charArray[index])){
        let digit = parseInt(charArray[index]);

        if(ans>Math.floor((max-digit)/10)){
            return(sign==1)?max:min;
        }

        ans=ans*10+digit;

        index++;
    }
    return ans*sign
};

console.log(myAtoi("42"))