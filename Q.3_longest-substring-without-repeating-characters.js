var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let j = 0;
    let maxLength = 0
  
    let unic = new Set()
    while (i < s.length) {
      if (!unic.has(s[i])) {
        unic.add(s[i])
        i++
  
        maxLength = Math.max(maxLength, unic.size)
      }
      else {
        unic.delete(s[j])
        j++
      }
    }
    return maxLength
  }
  
  console.log(lengthOfLongestSubstring("abcabcbb"))
  