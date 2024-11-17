function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      // Swap characters
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      
      // Move towards the center
      left++;
      right--;
    }
    return s
  }

console.log(reverseString(["h","e","l","l","o"]))