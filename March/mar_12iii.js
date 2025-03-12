// 2678. Number of Senior Citizens

const countSeniors = function (details) {
  let count = 0;

  for (char of details) {
    let temp = char.split("");
    let age = temp[11] + temp[12];
    if (Number(age) > 60) {
      count++;
    }
  }
  return count;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
console.log(countSeniors(["1313579440F2036", "2921522980M5644"]));
