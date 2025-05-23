// 2149. Rearrange Array Elements by Sign

const rearrangeArray = function (nums) {
  const n = nums.length;
  let posi = [];
  let nega = [];
  let arr = [];
  let pos = 0;
  let neg = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) posi.push(nums[i]);
    else {
      nega.push(nums[i]);
    }

    while (pos < posi.length && neg < nega.length) {
      arr.push(posi[pos++]);
      arr.push(nega[neg++]);
    }
  }
  return arr;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([3, 1, 2, -2, -5, -4]));
console.log(rearrangeArray([-1, 1]));
