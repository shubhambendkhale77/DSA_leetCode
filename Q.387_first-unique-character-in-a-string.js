var firstUniqChar = function (s) {
  let n = s.length;
  let map = {};

  for (i = 0; i < n; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  let j = 0;
  while (j < n) {
    if (map[s[j]] == 1) {
      return j;
    }
    j++;
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
