// 70. Climbing Stairs

const climbStairs = function (n) {
  let arr = Array(n + 1).fill(Infinity);
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(7));
