// 2799. Count Complete Subarrays in an Array

const countCompleteSubarrays = function (nums) {
  const dist_elem = new Set(nums).size;

  function at_most(arr, k) {
    if (k - 1 < 0) return 0;
    let left = 0;
    let count = 0;
    let map = new Map();

    for (let right = 0; right < arr.length; right++) {
      let no = arr[right];
      map.set(no, (map.get(no) || 0) + 1);

      while (map.size > k) {
        let left_num = arr[left];
        map.set(left_num, map.get(left_num) - 1);
        if (map.get(left_num) === 0) {
          map.delete(left_num);
        }
        left++;
      }
      count += right - left + 1;
    }
    return count;
  }
  return at_most(nums, dist_elem) - at_most(nums, dist_elem - 1);
};

console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));
console.log(countCompleteSubarrays([5, 5, 5, 5]));
