// 969. Pancake Sorting

const pancakeSort = function (arr) {
  function sorted(nums) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] <= nums[i - 1]) return false;
    }
    return true;
  }
  let ans = [];
  let check = arr;

  while (!sorted(check)) {
    let dex = check.indexOf(Math.max(...check));
    ans.push(dex + 1);
    ans.push(check.length);
    let beff = check.slice(0, dex + 1);
    let afff = check.slice(dex + 1, check.length);
    beff = beff.reverse();
    let temp = [...beff, ...afff];
    temp = temp.reverse();
    temp.pop();
    check = temp;
  }

  return ans;
};

console.log(pancakeSort([3, 2, 4, 1]));
console.log(pancakeSort([1, 2, 3]));
