// 1031. Maximum Sum of Two Non-Overlapping Subarrays

const maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  const n = nums.length;

  // prefix
  let prefix = [0];
  for (const no of nums) prefix.push(no + prefix[prefix.length - 1]);

  // helper to get subarray
  const get_sum = (l, r) => prefix[r + 1] - prefix[l];

  // function to compute the max sum
  const helper = (lenA, lenB) => {
    let maxA = 0,
      res = 0;

    for (let i = lenA + lenB - 1; i < n; i++) {
      maxA = Math.max(maxA, get_sum(i - lenB - lenA + 1, i - lenB));
      res = Math.max(res, maxA + get_sum(i - lenB + 1, i));
    }
    return res;
  };

  return Math.max(helper(firstLen, secondLen), helper(secondLen, firstLen));
};

console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2));
console.log(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2));
console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));
console.log(maxSumTwoNoOverlap([8, 20, 6, 2, 20, 17, 6, 3, 20, 8, 12], 5, 4));
