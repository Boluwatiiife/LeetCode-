// 2937. Make Three Strings Equal

const findMinimumOperations = function (s1, s2, s3) {
  const n = Math.max(s1.length, s2.length, s3.length);
  const num = s1.length + s2.length + s3.length;
  let sum = s1.length + s2.length + s3.length;

  for (let i = 0; i < n; i++) {
    if (s1[i] === s2[i] && s2[i] === s3[i]) sum -= 3;
    else break;
  }

  return sum === num ? -1 : sum;
};

console.log(findMinimumOperations("abc", "abb", "ab"));
console.log(findMinimumOperations("dac", "bac", "cac"));
console.log(findMinimumOperations("a", "a", "a"));
