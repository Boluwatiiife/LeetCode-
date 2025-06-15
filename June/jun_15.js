// 2358. Maximum Number of Groups Entering a Competition

const maximumGroups = function (grades) {
  let left = 0;
  let right = grades.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let temp = (mid * (mid + 1)) / 2;
    if (temp <= grades.length) left = mid + 1;
    else right = mid - 1;
  }

  return right;
};

console.log(maximumGroups([10, 6, 12, 7, 3, 5]));
console.log(maximumGroups([8, 8]));
