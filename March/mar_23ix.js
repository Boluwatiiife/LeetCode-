// 3456. Find Special Substring of Length K

const hasSpecialSubstring = function (s, k) {
  let arr = s.split("");

  for (let i = 0; i < arr.length - k + 1; i++) {
    let temp = arr.slice(i, k + i);
    temp = [...new Set(temp)];
    let before = arr[i - 1] || "";
    let after = arr[i + k] || "";

    if (temp.length === 1) {
      if (temp[0] !== before && temp[0] !== after) {
        return true;
      }
    }
  }
  return false;
};

console.log(hasSpecialSubstring("aaabaaa", 3));
console.log(hasSpecialSubstring("abc", 2));
console.log(hasSpecialSubstring("h", 1));
