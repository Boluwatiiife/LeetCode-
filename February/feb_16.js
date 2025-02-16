// 1437. Check If All 1's Are at Least Length K Places Away

const kLengthApart = function (nums, k) {
  let indexx = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (indexx !== -1 && i - indexx - 1 < k) {
        return false;
      }
      indexx = i;
    }
  }

  return true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], 3));
console.log(kLengthApart([0, 1, 0, 1], 1));
console.log(kLengthApart([0, 1, 0, 0, 0, 1, 0, 0, 1, 0], 2));
