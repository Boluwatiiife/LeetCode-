// 1760. Minimum Limit of Balls in a Bag

const minimumSize = function (nums, maxOperations) {
  function isPossible(arr, mid, maxx) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += Math.floor((arr[i] - 1) / mid);
    }
    return total <= maxx;
  }
  let left = 1;
  let right = nums.reduce((a, b) => Math.max(a, b));

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (isPossible(nums, mid, maxOperations)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(minimumSize([9], 2));
console.log(minimumSize([2, 4, 8, 2], 4));
