// 1925. Count Square Sum Triples

const countTriples = function (n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let xx = Math.sqrt(i * i + j * j);
      if (Number.isInteger(xx) && xx <= n) {
        count++;
      }
    }
  }

  return count;
};

console.log(countTriples(5));
console.log(countTriples(10));
