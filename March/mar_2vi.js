// 2154. Keep Multiplying Found Values by Two

const findFinalValue = function (nums, original) {
  let temp = original;

  while (nums.includes(temp)) {
    temp = temp * 2;
  }
  return temp;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
console.log(findFinalValue([2, 7, 9], 4));
console.log(findFinalValue([8, 19, 4, 2, 15, 3], 2));
