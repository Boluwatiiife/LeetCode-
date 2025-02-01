// 594. Longest Harmonious Subsequence.

const findLHS = function (nums) {
  const sortt = nums.sort((a, b) => a - b);
  return sortt;
  const counttt = new Map();
  //   return numm;
  for (let num of sortt) {
    counttt.set(num, (counttt.get(num) || 0) + 1);
  }
  //   return counttt;
  let uniquee = [];
  for (let [key, value] of counttt) {
    uniquee.push(key);
  }
  return uniquee;
  let arr = [];
  for (let i = 0; i < sortt.length; i++) {
    let temp = [];
    if (!temp.includes(sortt[i])) {
      temp.push(sortt[i]);
    } else if (temp.includes(sortt[i]) && sortt[i] === sortt[i - 1]) {
      temp.push(sortt[i]);
    }
    // arr.push(temp);
  }
  //   arr.push(temp);

  return arr;
  //   return Math.max(...nums);
  //   for (let i = 0; i < nums.length; i++) {
  //     let maxx = Math.max(...nums);
  //     let minn = Math.min(...nums);

  //     // if()
  //   }
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));
console.log(findLHS([2, 1, 4, 5, 1, 6, 5, 2, 6]));
