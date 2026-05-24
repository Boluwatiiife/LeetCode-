// 2578. Split With Minimum Sum

const splitNum = function (num) {
  const arr = num
    .toString()
    .split("")
    .sort((a, b) => a - b);

  let one = "",
    two = "";

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) one += arr[i];
    else two += arr[i];
  }

  return Number(one) + Number(two);
};

console.log(splitNum(4325));
console.log(splitNum(687));
console.log(splitNum(12345678));
