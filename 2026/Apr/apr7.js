// 3842. Toggle Light Bulbs

const toggleLightBulbs = function (bulbs) {
  const freq = new Map();

  for (const no of bulbs) {
    freq.set(no, (freq.get(no) || 0) + 1);
  }
  const arr = [...freq.keys()];

  let ans = [];
  for (const no of arr) {
    if (freq.get(no) % 2 !== 0) ans.push(no);
  }

  return ans.sort((a, b) => a - b);
};
console.log(toggleLightBulbs([10, 30, 20, 10]));
console.log(toggleLightBulbs([100, 100]));
