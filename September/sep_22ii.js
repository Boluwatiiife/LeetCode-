// 3678. Smallest Absent Positive Greater Than Average

const smallestAbsent = function (nums) {
  let aveg = nums.reduce((a, b) => a + b, 0) / nums.length;
  const sett = new Set(nums);

  for (let i = 1; i <= Infinity; i++) {
    if (i > aveg && !sett.has(i)) return i;
  }
};

console.log(smallestAbsent([3, 5]));
console.log(smallestAbsent([-1, 1, 2]));
console.log(smallestAbsent([4, -1]));
