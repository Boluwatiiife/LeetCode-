// 1560. Most Visited Sector in a Circular Track

const mostVisited = function (n, rounds) {
  let nums = new Array(n).fill(0);
  nums[rounds[0] - 1]++;

  let dex = rounds[0];
  for (let i = 1; i < rounds.length; i++) {
    const start = rounds[i - 1];
    const end = rounds[i];
    let temp = end <= start ? n - start + end : end - start;
    let count = 0;
    while (count < temp) {
      if (dex === n) dex = 0;
      nums[dex]++;
      dex++;
      count++;
    }
    dex = rounds[i];
  }
  const max = Math.max(...nums);
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      ans.push(i + 1);
    }
  }

  return ans;
};

console.log(mostVisited(4, [3, 1, 2]));
console.log(mostVisited(4, [1, 3, 1, 2]));
console.log(mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2]));
console.log(mostVisited(7, [1, 3, 5, 7]));
