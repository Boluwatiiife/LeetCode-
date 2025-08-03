// 3507. Minimum Pair Removal to Sort Array I

const minimumPairRemoval = function (nums) {
  function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }

    return true;
  }
  let count = 0;

  while (!isSorted(nums)) {
    count++;
    let temp = [];
    for (let i = 0; i < nums.length - 1; i++) {
      temp.push(nums[i] + nums[i + 1]);
    }
    const dex = temp.indexOf(Math.min(...temp));
    nums[dex] = temp[dex];
    nums.splice(dex + 1, 1);
  }

  return count;
};

console.log(minimumPairRemoval([5, 2, 3, 1]));
console.log(minimumPairRemoval([1, 2, 2]));
console.log(minimumPairRemoval([2, 2, -1, 3, -2, 2, 1, 1, 1, 0, -1]));
