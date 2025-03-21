// 3258. Count Substrings That Satisfy K-Constraint I

const countKConstraintSubstrings = function (s, k) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let temp = s.slice(i, j + 1);
      let one = 0,
        zero = 0;
      for (char of temp) {
        if (char === "1") {
          one++;
        }
        if (char === "0") {
          zero++;
        }
      }
      if (one <= k || zero <= k) count++;
    }
  }

  return count;
};

console.log(countKConstraintSubstrings("10101", 1));
console.log(countKConstraintSubstrings("1010101", 2));
console.log(countKConstraintSubstrings("11111", 1));
