// 3216. Lexicographically Smallest String After a Swap

const getSmallestString = function (s) {
  const n = s.length;
  const arr = s.split("");

  for (let i = 1; i < n; ++i) {
    const a = arr[i - 1];
    const b = arr[i];
    if (a > b && +a % 2 === +b % 2) {
      arr[i - 1] = b;
      arr[i] = a;
      return arr.join("");
    }
  }

  return s;
};

console.log(getSmallestString("45320"));
console.log(getSmallestString("001"));
console.log(getSmallestString("131"));
