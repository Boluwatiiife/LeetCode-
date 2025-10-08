// 740. Delete and Earn

const deleteAndEarn = function (nums) {
  let maxx = Math.max(...nums);
  let points = Array(maxx + 1).fill(0);
  for (const no of nums) {
    points[no] += no;
  }

  let prev2 = 0,
    prev1 = points[1];

  for (let i = 2; i <= maxx; i++) {
    const curr = Math.max(prev1, prev2 + points[i]);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
};

console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
console.log(deleteAndEarn([1]));
console.log(deleteAndEarn([3, 1]));
console.log(deleteAndEarn([3, 3, 1]));
