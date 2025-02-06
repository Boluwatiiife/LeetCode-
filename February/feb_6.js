// 961. N-Repeated Element in Size 2N Array

const repeatedNTimes = function (nums) {
  const frequency_map = {};
  let max_count = 0;
  let most_frequent = nums[0];

  for (const num of nums) {
    frequency_map[num] = (frequency_map[num] || 0) + 1;

    if (frequency_map[num] > max_count) {
      max_count = frequency_map[num];
      most_frequent = num;
    }
  }
  return most_frequent;
};

console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));

const repeateddd = function (nums) {
  const seenn = new Set();

  for (const num of nums) {
    if (seenn.has(num)) return num;
    seenn.add(num);
  }
  //   return "yo";
};

console.log(repeateddd([1, 2, 3, 3]));
console.log(repeateddd([2, 1, 2, 5, 3, 2]));
console.log(repeateddd([5, 1, 5, 2, 5, 3, 5, 4]));

const testingg = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
};
console.log(testingg([1, 2, 3, 3]));
console.log(testingg([2, 1, 2, 5, 3, 2]));
console.log(testingg([5, 1, 5, 2, 5, 3, 5, 4]));
