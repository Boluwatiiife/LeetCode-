// 2411. Smallest Subarrays With Maximum Bitwise OR

const smallestSubarrays = function (nums) {
  let n = nums.length;
  const nearest = Array(32);
  let arr = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    let farthest_bit = i;

    for (let j = 0; j < 32; j++) {
      if (nums[i] & (1 << j)) nearest[j] = i;
      else if (nearest[j] > farthest_bit) farthest_bit = nearest[j];
    }
    arr[i] = farthest_bit - i + 1;
  }

  return arr;
};

console.log(smallestSubarrays([1, 0, 2, 1, 3]));
console.log(smallestSubarrays([1, 2]));
console.log(smallestSubarrays([4, 0, 5, 6, 3, 2]));
// [4,3,2,2,1,1]
console.log(smallestSubarrays([0, 0, 0]));
