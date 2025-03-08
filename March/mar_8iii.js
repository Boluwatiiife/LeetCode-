// 2399. Check Distances Between Same Letters

const checkDistances = function (s, distance) {
  let strin = "abcdefghijklmnopqrstuvwxyz";
  let nums = new Set();
  for (let i = 0; i < s.length; i++) {
    for (j = 0; j < strin.length; j++) {
      if (s[i] === strin[j]) {
        nums.add(distance[j]);
      }
    }
  }
  nums = [...nums];
  //   return nums;
  let arr = [];
  let seen = new Set();

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[i] === s[j]) {
        arr.push([s[i], j - i - 1]);
      }
    }
  }
  for ([xx, yy] of arr) {
    seen.add(xx);
  }
  seen = [...seen];

  let temp = new Set();
  for (char of seen) {
    for ([xx, yy] of arr) {
      if (char === xx) {
        temp.add(yy);
        break;
      }
    }
  }
  temp = [...temp];

  for (let i = 0; i < temp.length; i++) {
    if (nums[i] !== temp[i]) return false;
  }

  return true;
};

console.log(
  checkDistances(
    "abaccb",
    [
      1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
console.log(
  checkDistances(
    "aa",
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
console.log(
  checkDistances(
    "abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzza",
    [
      50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ]
  )
);
