// 2614. Prime In Diagonal

const diagonalPrime = function (nums) {
  let n = nums.length;
  let count = 0;

  function is_prime(no) {
    if (no <= 1) return false;
    if (no <= 3) return true;
    if (no % 2 === 0 || no % 3 === 0) return false;

    for (let i = 5; i * i <= no; i += 6) {
      if (no % i === 0 || no % (i + 2) === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < n; i++) {
    let xxx = nums[i][i];
    let yyy = nums[i][n - 1 - i];

    if (is_prime(xxx)) {
      count = Math.max(count, xxx);
    }
    if (is_prime(yyy)) {
      count = Math.max(count, yyy);
    }
  }
  return count;
};

console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ])
);
console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 17, 7],
    [9, 11, 10],
  ])
);
