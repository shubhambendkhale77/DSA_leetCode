var isAnagram = function(s, t) {
    if(s.length!=t.length){
    return false
}
let str1=s.split('').sort().join("")

let str2=t.split('').sort().join("")

if(str1===str2){
    return true
}
return false
};

console.log(isAnagram("anagram","nagaram"))