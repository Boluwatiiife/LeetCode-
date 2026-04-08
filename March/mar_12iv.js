// 2682. Find the Losers of the Circular Game

const circularGameLosers = function (n, k) {
  let nums = Array(n).fill(0);
  nums[0]++;
  //   return nums;
  let arr = Array.from({ length: n }, (_, i) => i + 1);

  //   return arr;
  let x = 0;
  let i = 2;
  let turn = 4;
  while (true) {
    // const value = arr[turn % arr.length];
    x = (x + turn) % arr.length;
    const value = arr[x];

    nums[value - 1]++;
    return value;
    if (nums[value - 1] > 1) break;
    turn = turn * i;
    i++;
    // return ;
  }
  return nums;
};

console.log(circularGameLosers(5, 2));
console.log(circularGameLosers(4, 4));
console.log(circularGameLosers(5, 8));
