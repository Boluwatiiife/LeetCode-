// 739. Daily Temperatures

const dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let anss = Array(n).fill(0);
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prev_dex = stack.pop();
      anss[prev_dex] = i - prev_dex;
    }
    stack.push(i);
  }
  return anss;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
console.log(dailyTemperatures([76, 60, 50, 43]));
