var isPalindrome = function(x) {
    let str = x.toString()
 let temp=""
 for(i=str.length-1;i>=0;i--){
   temp+=str[i]
 }
 if(temp==x){
return true
 }
 else if(temp.length==2){
  return false
 }
 else{
  return false
 }
}

console.log(isPalindrome(121))