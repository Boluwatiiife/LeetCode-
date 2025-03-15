// 2894. Divisible and Non-divisible Sums Difference

const differenceOfSums = function (n, m) {
  let not_div = 0,
    div = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      not_div += i;
    }
    if (i % m === 0) {
      div += i;
    }
  }
  return not_div - div;
};

console.log(differenceOfSums(10, 3));
console.log(differenceOfSums(5, 6));
console.log(differenceOfSums(5, 1));
