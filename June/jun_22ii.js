// 3152. Special Array II

const isArraySpecial = function (nums, queries) {
  const n = nums.length;
  let group = new Array(n).fill(0);
  let group_id = 0;
  group[0] = group_id;

  for (let i = 1; i < n; i++) {
    if (nums[i] % 2 !== nums[i - 1] % 2) {
      group[i] = group_id;
    } else {
      group_id++;
      group[i] = group_id;
    }
  }
  //   return group;

  let ans = [];
  for (const [x, y] of queries) {
    ans.push(group[x] === group[y]);
  }
  return ans;
};

console.log(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]]));
console.log(isArraySpecial([1, 1, 1, 2, 1, 3, 3], [[0, 4]]));
console.log(
  isArraySpecial(
    [4, 3, 1, 6],
    [
      [0, 2],
      [2, 3],
    ]
  )
);
