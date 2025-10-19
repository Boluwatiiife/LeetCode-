// 3718. Smallest Missing Multiple of K

const missingMultiple = function (nums, k) {
  const sett = new Set(nums);

  for (let i = 1; i <= Infinity; i++) {
    if (i % k === 0 && !sett.has(i)) return i;
  }
};

console.log(missingMultiple([8, 2, 3, 4, 6], 2));
console.log(missingMultiple([1, 4, 7, 10, 15], 5));
