// 15. 3Sum

const add_up_to_zero = function (arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    let target = -arr[i];
    if (arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let curr = arr[left] + arr[right];
      if (curr === target) {
        ans.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right--;
      } else if (curr > target) right--;
      else if (curr < target) left++;
    }
  }
  return ans;
};

console.log(add_up_to_zero([-3, 0, 1, 2, -1, 1, -2]));
console.log(add_up_to_zero([5, -3, -2, 1, 0, -1]));
console.log(add_up_to_zero([-1, 0, 1, 2, -1, -4]));
console.log(
  add_up_to_zero([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
);
