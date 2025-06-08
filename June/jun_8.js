// 386. Lexicographical Numbers

const lexicalOrder = function (n) {
  let arr = Array.from({ length: n }, (_, i) => (i + 1).toString())
    .sort()
    .map((xx) => Number(xx));

  return arr;
};

console.log(lexicalOrder(13));
console.log(lexicalOrder(2));
