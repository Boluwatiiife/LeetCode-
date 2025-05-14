// 870. Advantage Shuffle

const advantageCount = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  const n = nums1.length;
  let two = nums2.map((val, i) => [val, i]);
  two.sort((a, b) => a[0] - b[0]);

  let low = 0;
  let high = n - 1;

  let ans = new Array(n);
  for (i = n - 1; i >= 0; i--) {
    const [val, dex] = two[i];
    if (nums1[high] > val) {
      ans[dex] = nums1[high];
      high--;
    } else {
      ans[dex] = nums1[low];
      low++;
    }
  }
  return ans;
};

console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));
console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]));
