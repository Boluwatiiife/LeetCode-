// 496. Next Greater Element I

const nextGreaterElement = function (nums1, nums2) {
  let arr = [];

  let n = nums1.length;
  for (let i = 0; i < n; i++) {
    let no = nums1[i];
    let temp = nums2.slice(nums2.indexOf(no) + 1);
    let maxx = -1;
    for (xx of temp) {
      if (xx > no) {
        maxx = xx;
        break;
      }
    }
    arr.push(maxx);
    // return temp;
  }
  return arr;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
