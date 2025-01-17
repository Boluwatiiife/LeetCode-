// 35. Search Insert Position

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = function (nums, target) {
  let arrayy = nums;
  arrayy.push(target);
  for (let i = 0; i < arrayy.length; i++) {
    for (let j = 0; j < arrayy.length; j++) {
      if (i !== j && arrayy[i] === arrayy[j]) {
        arrayy.splice(j, 1);
      }
    }
  }
  let length = arrayy.length;
  for (let x = 0; x < length - 1; x++) {
    for (let y = 0; y < length - x - 1; y++) {
      if (arrayy[y] > arrayy[y + 1]) {
        let temp = arrayy[y];
        arrayy[y] = arrayy[y + 1];
        arrayy[y + 1] = temp;
      }
    }
  }
  for (let r = 0; r < arrayy.length; r++) {
    if (arrayy[r] === target) {
      return r;
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));

// better solution

const searchInsertt = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found, return index
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  // If the target is not found, `left` is the correct insertion position
  return left;
};
