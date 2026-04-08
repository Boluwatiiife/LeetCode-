// 1031. Maximum Sum of Two Non-Overlapping Subarrays

const maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  // helper function to compute the max sum
  const get_max_sum = (arr, len1, len2) => {
    let max_first_window_sum = 0;
    let current_first_window_sum = 0;
    let current_second_window_sum = 0;
    let max_total_sum = 0;

    // compute initial sums for first len and second len
    for (let i = 0; i < len1; i++) {
      current_first_window_sum += arr[i];
    }
    for (let i = len1; i < len1 + len2; i++) {
      current_second_window_sum += arr[i];
    }
    // return [current_first_window_sum, current_second_window_sum];
    max_first_window_sum = current_first_window_sum;
    max_total_sum = max_first_window_sum + current_second_window_sum;
    // return [max_first_window_sum, max_total_sum];

    // slide both windows accross the array
    for (let i = len1 + len2; i < arr.length; i++) {
      // slide the first winow (before the second window)
      current_first_window_sum += arr[i - len2] - arr[i - len2 - len1];
      max_first_window_sum = Math.max(
        max_first_window_sum,
        current_first_window_sum
      );

      // slide the second window
      current_second_window_sum += arr[i] - arr[i - len2];

      // update the max total
      max_total_sum = Math.max(
        max_total_sum,
        max_first_window_sum + current_second_window_sum
      );
    }
    return max_total_sum;
  };

  return Math.max(
    get_max_sum(nums, firstLen, secondLen),
    get_max_sum(nums, secondLen, firstLen)
  );
};

console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2));
console.log(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2));
console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));
