// 2677. Chunk Array

const chunk = function (arr, size) {
  const n = arr.length;
  let ans = [];
  let temp = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    temp.push(arr[i]);
    count++;
    if (count === size) {
      ans.push(temp);
      temp = [];
      count = 0;
    }
  }
  if (temp.length > 0) ans.push(temp);

  return ans;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
console.log(chunk([8, 5, 3, 2, 6], 6));
