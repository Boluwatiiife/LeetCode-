// 3959. Check Good Integer

const checkGoodInteger = function (n) {
  const nums = n
    .toString()
    .split("")
    .map((x) => Number(x));

  let digitSum = 0,
    squareSum = 0;
  for (const no of nums) {
    digitSum += no;
    squareSum += no * no;
  }

  return squareSum - digitSum >= 50 ? true : false;
};

console.log(checkGoodInteger(1000));
console.log(checkGoodInteger(19));
