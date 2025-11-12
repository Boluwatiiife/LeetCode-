// 3740. Minimum Distance Between Three Equal Elements I

const minimumDistance = function (nums) {
  const freq = new Map();
  const arr = new Set();
  for (const no of nums) {
    arr.add(no);
    freq.set(no, (freq.get(no) || 0) + 1);
  }

  let ans = Infinity;
  for (const no of arr) {
    let temp = [];
    if (freq.get(no) > 2) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === no) {
          temp.push(i);
          if (temp.length === 3) {
            let sum = 0;
            sum += Math.abs(temp[0] - temp[1]);
            sum += Math.abs(temp[1] - temp[2]);
            sum += Math.abs(temp[2] - temp[0]);
            ans = Math.min(ans, sum);
            temp.shift();
          }
        }
      }
    }
  }

  return ans === Infinity ? -1 : ans;
};

console.log(minimumDistance([1, 2, 1, 1, 3]));
console.log(minimumDistance([1, 1, 2, 3, 2, 1, 2]));
console.log(minimumDistance([1, 1, 1, 2, 3, 2, 1, 2]));
console.log(minimumDistance([1, 1, 2, 3, 2, 1, 2, 1, 1, 1]));
console.log(minimumDistance([1]));
