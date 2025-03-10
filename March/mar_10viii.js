// 2549. Count Distinct Numbers on Board

const distinctIntegers = function (n) {
  let arr = new Set();
  arr.add(n);

  let no = n;
  while (no > 0) {
    for (let i = 1; i <= no; i++) {
      if (no % i === 1) {
        arr.add(i);
      }
    }
    no--;
  }

  return arr.size;
};

console.log(distinctIntegers(5));
console.log(distinctIntegers(3));
