// 2441. Largest Positive Integer That Exists With Its Negative

const findMaxK = function (nums) {
  let posii = [];
  let negaa = [];

  for (no of nums) {
    if (no > 0) {
      posii.push(no);
    } else if (no < 0) {
      negaa.push(Math.abs(no));
    }
  }
  let resultt = [];
  for (xx of posii) {
    for (yy of negaa) {
      if (xx === yy) {
        resultt.push(xx);
      }
    }
  }
  return resultt.length > 0 ? Math.max(...resultt) : -1;
};

console.log(findMaxK([-1, 2, -3, 3]));
console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
