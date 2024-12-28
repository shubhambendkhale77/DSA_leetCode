var reverseWords = function(s) {
    s=s.split(" ")
    for(i=0;i<s.length;i++){
        s[i]= s[i].split("").reverse().join("")
       
    }
   return s.join(" ")
};

console.log(reverseWords("Let's take LeetCode contest"))