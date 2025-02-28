// 2089. Find Target Indices After Sorting Array

const targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);

  let resultt = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      resultt.push(i);
    }
  }

  return resultt;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices([1, 2, 5, 2, 3], 3));
console.log(targetIndices([1, 2, 5, 2, 3], 5));
