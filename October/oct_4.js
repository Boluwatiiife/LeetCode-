// 11. Container With Most Water

const maxArea = function (height) {
  const n = height.length;
  let left = 0,
    right = n - 1;
  let maxx = 0;

  while (left < right) {
    let one = Math.min(height[left], height[right]);
    let two = right - left;
    maxx = Math.max(maxx, one * two);
    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxx;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
