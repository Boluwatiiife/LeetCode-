// 496. Next Greater Element I

const nextGreaterElement = function (nums1, nums2) {
  const nextGreaterMap = new Map();
  const stack = [];

  for (let num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      nextGreaterMap.set(stack.pop(), num);
    }
    stack.push(num);
  }

  while (stack.length > 0) {
    nextGreaterMap.set(stack.pop(), -1);
  }

  return nums1.map((num) => nextGreaterMap.get(num) || -1);
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
