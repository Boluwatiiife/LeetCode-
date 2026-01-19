// 3794. Reverse String Prefix

const reversePrefix = function (s, k) {
  const n = s.length;
  const one = s.split("").splice(0, k).reverse().join("");
  const two = s.split("").splice(k, n).join("");

  return one + two;
};

console.log(reversePrefix("abcd", 2));
console.log(reversePrefix("xyz", 3));
console.log(reversePrefix("hey", 1));
