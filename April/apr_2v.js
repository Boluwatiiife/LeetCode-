// 179. Largest Number

const largestNumber = function (nums) {
  let arr = nums.map(String);

  arr.sort((a, b) => (b + a).localeCompare(a + b));

  return arr[0] === "0" ? "0" : arr.join("");
};

console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([333, 430, 3234, 54, 9]));
