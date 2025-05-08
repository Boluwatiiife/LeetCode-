// 556. Next Greater Element III

const nextGreaterElement = function (n) {
  let arr = n.toString().split("").map(Number);
  let len = arr.length;

  // find the first decreasing digit from the right
  let i = len - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;
  if (i < 0) return -1;

  // find the next digit on the right greater than digit[i]
  let j = len - 1;
  while (arr[j] <= arr[i]) j--;

  // swap the digits
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // reverse the subarray after i
  let x = i + 1,
    y = len - 1;
  while (x < y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
    x++;
    y--;
  }

  const ans = parseInt(arr.join(""), 10);
  return ans <= 0x7fffffff ? ans : -1;
};

console.log(nextGreaterElement(12));
console.log(nextGreaterElement(21));
console.log(nextGreaterElement(231));
console.log(nextGreaterElement(2413));
console.log(nextGreaterElement(11));
console.log(nextGreaterElement(101));
