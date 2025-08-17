// 567. Permutation in String

const checkInclusion = function (s1, s2) {
  function matches(one, two) {
    for (let i = 0; i < 26; i++) {
      if (one[i] !== two[i]) return false;
    }
    return true;
  }

  if (s1.length > s2.length) return false;

  let one = Array(26).fill(0);
  let two = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    one[s1.charCodeAt(i) - 97]++;
    two[s2.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (matches(one, two)) return true;
    two[s2.charCodeAt(i) - 97]--;
    two[s2.charCodeAt(i + s1.length) - 97]++;
  }

  return matches(one, two);
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("abc", "eidboaoo"));
console.log(checkInclusion("abca", "eidboaoao"));
console.log(checkInclusion("abca", "aidacabooo"));
console.log(checkInclusion("hello", "ooolleoooleh"));
console.log(checkInclusion("adc", "dcda"));
