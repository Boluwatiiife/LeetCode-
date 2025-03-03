// 2206. Divide Array Into Equal Pairs

const divideArray = function (nums) {
  let count_nums = new Map();

  for (dig of nums) {
    count_nums.set(dig, (count_nums.get(dig) || 0) + 1);
  }
  let uniquee = new Set(nums);
  let arr = [...uniquee];

  for (char of arr) {
    if (count_nums.get(char) % 2 !== 0) {
      return false;
    }
  }

  return true;
};

console.log(divideArray([3, 2, 3, 2, 2, 2]));
console.log(divideArray([1, 2, 3, 4]));
