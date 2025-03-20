// 3200. Maximum Height of a Triangle

const maxHeightOfTriangle = function (red, blue) {
  let redd = red;
  let bluee = blue;

  let arr = [];
  let sum = 1;
  for (let i = 0; i < Infinity; i++) {
    if (redd < sum) break;
    arr.push(sum);
    redd = redd - sum;
    sum++;
    if (bluee < sum) break;
    arr.push(sum);
    bluee = bluee - sum;
    sum++;
  }
  let blu = blue;
  let re = red;
  let arrr = [];
  let summ = 1;
  for (let i = 0; i < Infinity; i++) {
    if (blu < summ) break;
    arrr.push(summ);
    blu = blu - summ;
    summ++;
    if (re < summ) break;
    arrr.push(summ);
    re = re - summ;
    summ++;
  }

  return Math.max(arr.length, arrr.length);
};

console.log(maxHeightOfTriangle(2, 4));
console.log(maxHeightOfTriangle(2, 1));
console.log(maxHeightOfTriangle(1, 1));
console.log(maxHeightOfTriangle(10, 1));
