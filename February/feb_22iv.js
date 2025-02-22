// 1732. Find the Highest Altitude

const largestAltitude = function (gain) {
  let resultt = [0];
  let sum = 0;

  for (num of gain) {
    resultt.push(sum + num);
    sum = sum + num;
  }
  return Math.max(...resultt);
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
