// 2496. Maximum Value of a String in an Array

const maximumValue = function (strs) {
  let maxx = 0;
  for (char of strs) {
    if (!isNaN(char)) {
      let no = Number(char);
      maxx = Math.max(maxx, no);
    } else {
      maxx = Math.max(maxx, char.length);
    }
  }

  return maxx;
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(["1", "01", "001", "0001"]));
