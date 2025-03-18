// 3083. Existence of a Substring in a String and Its Reverse

const isSubstringPresent = function (s) {
  let reverr = s.split("").reverse().join("");
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    let temp = arr.slice(i, i + 2);
    let tempp = temp[0] + temp[1];
    if (reverr.includes(tempp)) {
      return true;
    }
  }
  return false;
};

console.log(isSubstringPresent("leetcode"));
console.log(isSubstringPresent("abcba"));
console.log(isSubstringPresent("abcd"));
