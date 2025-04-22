// 567. Permutation in String

const checkInclusion = function (s1, s2) {
  const chars = {};

  for (let cha of s1) {
    if (cha in chars) {
      chars[cha]++;
    } else chars[cha] = 1;
  }

  let left = 0,
    right = 0,
    count = s1.length;

  while (right < s2.length) {
    if (chars[s2[right]] > 0) count--;

    chars[s2[right]]--;
    right++;

    if (count === 0) return true;
    if (right - left === s1.length) {
      if (chars[s2[left]] >= 0) count++;
      chars[s2[left]]++;
      left++;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
