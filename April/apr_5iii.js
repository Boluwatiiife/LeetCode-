// 373. Find K Pairs with Smallest Sums

const kSmallestPairs = function (nums1, nums2, k) {
  const arr = [];
  const min_heap = [];

  // intialize the heap with pairs of nums1[i] and nums2[0]
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    min_heap.push([nums1[i] + nums2[0], i, 0]);
  }

  // helper function to sort the head based on the sum
  const heapifyy = () => min_heap.sort((a, b) => a[0] - b[0]);
  heapifyy();

  while (k > 0 && min_heap.length > 0) {
    const [sum, i, j] = min_heap.shift();
    arr.push([nums1[i], nums2[j]]);
    k--;

    // move to the next element in nums2
    if (j + 1 < nums2.length) {
      min_heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
      heapifyy();
    }
  }

  return arr;
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
