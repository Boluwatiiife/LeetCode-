// 3024. Type of Triangle

const triangleType = function (nums) {
  let [a, b, c] = nums;
  if (a + b <= c || a + c <= b || b + c <= a) return "none";
  let arr = new Set(nums);

  return arr.size === 1
    ? "equilateral"
    : arr.size === 2
    ? "isosceles"
    : "scalene";
};

console.log(triangleType([3, 3, 3]));
console.log(triangleType([3, 4, 5]));
console.log(triangleType([4, 4, 5]));
console.log(triangleType([8, 4, 2]));
