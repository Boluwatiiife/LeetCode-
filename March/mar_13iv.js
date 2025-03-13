// 2716. Minimize String Length

const minimizedStringLength = function (s) {
  let arr = s.split("");
  arr = new Set(arr);
  return arr.size;
};

console.log(minimizedStringLength("aaabc"));
console.log(minimizedStringLength("cbbd"));
console.log(minimizedStringLength("baadccab"));
