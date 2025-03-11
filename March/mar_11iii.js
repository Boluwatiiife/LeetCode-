// 2605. Form Smallest Number From Two Digit Arrays

const minNumber = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  let same = Infinity;
  let minn = Infinity;
  for (xx of nums1) {
    for (yy of nums2) {
      if (xx === yy) {
        same = Math.min(same, xx);
      } else {
        let temp = xx.toString() + yy.toString();
        let tempp = yy.toString() + xx.toString();
        minn = Math.min(Number(temp), Number(tempp), minn);
      }
    }
  }
  return same !== Infinity ? same : minn;
};

console.log(minNumber([4, 1, 3], [5, 7]));
console.log(minNumber([3, 5, 2, 6], [3, 1, 7]));
console.log(minNumber([7, 5, 6], [1, 4]));
