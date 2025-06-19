// 2602. Minimum Operations to Make All Array Elements Equal

const minOperations = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let prefix = [0];
  for (let i = 0; i < nums.length; i++) {
    prefix.push(prefix[prefix.length - 1] + nums[i]);
  }

  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    let no = queries[i];
    let left = 0;
    let right = n - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= no) right = mid - 1;
      else left = mid + 1;
    }
    let left_cost = no * left - prefix[left];
    let right_cost = prefix[n] - prefix[left] - no * (n - left);
    ans.push(left_cost + right_cost);
  }

  return ans;
};

console.log(minOperations([3, 1, 6, 8], [1, 5]));
console.log(minOperations([2, 9, 6, 3], [10]));
