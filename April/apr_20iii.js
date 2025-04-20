// 781. Rabbits in Forest

const numRabbits = function (answers) {
  const mapp = new Map();

  for (const x of answers) {
    mapp.set(x, (mapp.get(x) || 0) + 1);
  }

  let ans = 0;
  for (let [num, count] of mapp.entries()) {
    let grp = num + 1;
    let total = 0;
    while (total < count) {
      total += grp;
    }
    ans += total;
  }
  return ans;
};

console.log(numRabbits([1, 1, 2])); //5
console.log(numRabbits([10, 10, 10])); //11
console.log(numRabbits([1, 0, 1, 0, 0])); //5
console.log(numRabbits([0, 0, 1, 1, 1])); //6
console.log(numRabbits([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4])); //6
