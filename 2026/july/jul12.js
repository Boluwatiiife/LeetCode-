// 1331. Rank Transform of an Array

const arrayRankTransform = function (arr) {
  const n = arr.length;

  let nums = new Array(n);
  for (let i = 0; i < n; i++) nums[i] = [arr[i], i];
  nums.sort((a, b) => a[0] - b[0]);

  let ans = new Array(n);
  let temp = "hey";
  let count = 0;
  for (let i = 0; i < n; i++) {
    const [no, dex] = nums[i];
    if (temp === no) ans[dex] = count;
    else {
      count++;
      ans[dex] = count;
      temp = no;
    }
  }
  return ans;
};

console.log(arrayRankTransform([40, 10, 20, 30]));
console.log(arrayRankTransform([100, 100, 100]));
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
