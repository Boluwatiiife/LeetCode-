// 541. Reverse String II
const reverseStr = function (s, k) {
  let stringg = s.split("");
  let arr = [];

  for (let i = 0; i < stringg.length; i = i + k) {
    arr.push(stringg.slice(i, i + k));
  }
  //   return arr;
  for (let i = 0; i < arr.length; i = i + 2) {
    arr[i].reverse();
  }
  return arr.flat().join("");
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
console.log(reverseStr("abcdef", 3));
console.log(reverseStr("boluwatife", 2));
