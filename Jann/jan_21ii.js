// 3046. Split the Array

const isPossibleToSplit = function (nums) {
  let mapp = new Map();
  for (const no of nums) {
    mapp.set(no, (mapp.get(no) || 0) + 1);
  }

  const sett = [...new Set(nums)];

  for (const no of sett) {
    if (mapp.get(no) > 2) return false;
  }

  return true;
};

console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));
console.log(isPossibleToSplit([1, 1, 1, 1]));
console.log(isPossibleToSplit([2, 2, 3, 1]));
