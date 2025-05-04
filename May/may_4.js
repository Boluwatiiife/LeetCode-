// 3305. Count of Substrings Containing Every Vowel and K Consonants I

const countOfSubstrings = function (word, k) {
  const n = word.length;
  let map = new Map();
  let left = 0;
  let count = 0;
  let conn = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let right = 0; right < n; right++) {
    const char = word[right];
    if (vowels.includes(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    if (!vowels.includes(char)) {
      conn++;
    }

    while (conn > k) {
      let left_most = word[left];
      if (vowels.includes(left_most)) {
        map.set(left_most, map.get(left_most) - 1);
        if (map.get(left_most) === 0) {
          map.delete(left_most);
        }
      }
      if (!vowels.includes(left_most)) {
        conn--;
      }
      left++;
    }
    if (conn === k && map.size === 5) {
      let temp_left = left;
      const temp_map = new Map(map);
      let temp_conn = conn;

      while (temp_left <= right && temp_map.size === 5 && temp_conn === k) {
        count++;
        const left_most = word[temp_left];
        if (vowels.includes(left_most)) {
          temp_map.set(left_most, temp_map.get(left_most) - 1);
          if (temp_map.get(left_most) === 0) temp_map.delete(left_most);
        } else {
          temp_conn--;
        }
        temp_left++;
      }
    }
  }

  return count;
};

console.log(countOfSubstrings("aeioqq", 1));
console.log(countOfSubstrings("aeiou", 0));
console.log(countOfSubstrings("ieaouqqieaouqq", 1));
console.log(countOfSubstrings("iqeaouqi", 2));
console.log(countOfSubstrings("ieiaoud", 0));
