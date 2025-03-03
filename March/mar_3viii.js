// 2239. Find Closest Number to Zero

const findClosestNumber = function (nums) {
  let posii = [];
  let negaa = [];
  for (char of nums) {
    if (char >= 0) {
      posii.push(char);
    } else {
      negaa.push(char);
    }
  }
  posii = posii.sort((a, b) => a - b);
  negaa = negaa.sort((a, b) => a - b);

  if (Math.abs(negaa[negaa.length - 1]) < posii[0])
    return negaa[negaa.length - 1];
  if (posii.length === 0) return negaa[negaa.length - 1];
  return posii[0];
};

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
console.log(findClosestNumber([2, -1, 1]));
console.log(findClosestNumber([-100000, -100000]));
