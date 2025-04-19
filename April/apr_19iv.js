// 2134. Minimum Swaps to Group All 1's Together II

const minSwaps = function (nums) {
  let one = 0;
  for (no of nums) {
    if (no === 1) one++;
  }
  let join = [...nums, ...nums];
  let sum = 0;
  for (let i = 0; i < one; i++) {
    sum += join[i];
  }

  let left = 0;
  let minn = Infinity;
  minn = Math.min(minn, one - sum);
  for (let i = one; i < join.length; i++) {
    sum -= join[left];
    sum += join[i];
    minn = Math.min(minn, one - sum);
    left++;
  }

  return minn;
};

console.log(minSwaps([0, 1, 0, 1, 1, 0, 0]));
console.log(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]));
console.log(minSwaps([1, 1, 0, 0, 1]));
console.log(minSwaps([0, 1, 0, 1, 1, 0, 1, 0, 1]));
