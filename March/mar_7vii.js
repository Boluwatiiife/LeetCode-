// 2367. Number of Arithmetic Triplets

const arithmeticTriplets = function (nums, diff) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i !== j && j !== k) {
          if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
            arr.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  return arr.length;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));

const tripletssss = function (nums, diff) {
  const num_count = new Set(nums);
  let count = 0;

  for (no of nums) {
    if (num_count.has(no + diff) && num_count.has(no + 2 * diff)) {
      count++;
    }
  }

  return count;
};

console.log(tripletssss([0, 1, 4, 6, 7, 10], 3));
console.log(tripletssss([4, 5, 6, 7, 8, 9], 2));
