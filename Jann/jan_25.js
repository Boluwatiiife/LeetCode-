// 3507. Minimum Pair Removal to Sort Array I

const minimumPairRemoval = function (nums) {
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  }

  let ans = 0;

  while (isSorted(nums) === false) {
    let temp = [];
    for (let i = 1; i < nums.length; i++) {
      temp.push(nums[i] + nums[i - 1]);
    }
    let dexx = temp.indexOf(Math.min(...temp));
    let arrr = [];
    for (let i = 0; i < dexx; i++) arrr.push(nums[i]);
    arrr.push(temp[dexx]);
    for (let i = dexx + 2; i < nums.length; i++) arrr.push(nums[i]);

    nums = arrr;
    ans++;
  }

  return ans;
};

console.log(minimumPairRemoval([5, 2, 3, 1]));
console.log(minimumPairRemoval([5, 2, 3, 1, 8]));
console.log(minimumPairRemoval([1, 2, 2]));
