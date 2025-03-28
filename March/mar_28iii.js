// 47. Permutations II

const permuteUnique = function (nums) {
  let arr = [];
  let map = new Map();
  let n = nums.length;

  function push_unique(temp, map, new_arr) {
    let key = new_arr.join(",");

    if (!map.has(key)) {
      temp.push(new_arr);
      map.set(key, true);
    }
  }

  function backtrackk(start) {
    if (start === n) {
      let neww = [...nums];
      //   arr.push([...nums]);
      //   arr.push(neww);
      push_unique(arr, map, neww);
      return;
    }

    for (let i = start; i < n; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrackk(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrackk(0);
  return arr;
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));
