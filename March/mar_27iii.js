// 2780. Minimum Index of a Valid Split

const minimumIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let onee = nums.slice(0, i + 1);
    let twoo = nums.slice(i + 1);

    let one_freq = new Map();
    let two_freq = new Map();

    for (no of onee) {
      one_freq.set(no, (one_freq.get(no) || 0) + 1);
    }
    for (no of twoo) {
      two_freq.set(no, (two_freq.get(no) || 0) + 1);
    }
    let one_max = 0,
      two_max = 0;
    for (no of onee) {
      let xx = one_freq.get(no);
      one_max = Math.max(one_max, xx);
    }
    for (no of twoo) {
      let xx = two_freq.get(no);
      two_max = Math.max(two_max, xx);
    }
    // return [one_max, two_max];
    if (one_max > onee.length / 2 && two_max > twoo.length / 2) {
      let on = 0,
        tw = 0;
      for (no of onee) {
        if (one_freq.get(no) === one_max) {
          on = no;
        }
      }
      for (no of twoo) {
        if (two_freq.get(no) === two_max) {
          tw = no;
        }
      }
      if (on === tw) return i;
    }
  }
  return -1;
};

console.log(minimumIndex([1, 2, 2, 2]));
console.log(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1]));
console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2]));

const minimumIndexxx = function (nums) {
  let candidate = -1,
    count = 0;
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  // Step 2: Count occurrences of the dominant element
  let totalCount = nums.filter((num) => num === candidate).length;

  // Step 3: Find the minimum valid split index
  let leftCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === candidate) leftCount++;

    let rightCount = totalCount - leftCount;
    let leftSize = i + 1;
    let rightSize = nums.length - leftSize;

    if (leftCount * 2 > leftSize && rightCount * 2 > rightSize) {
      return i;
    }
  }

  return -1;
};
