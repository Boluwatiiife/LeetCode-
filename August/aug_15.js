// 119. Pascal's Triangle II

const getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let ans = [1, 1];

  let i = 1;
  while (i < rowIndex) {
    i++;
    let temp = [];
    for (let j = 1; j < ans.length; j++) {
      temp.push(ans[j] + ans[j - 1]);
    }
    temp.push(1);
    temp.unshift(1);
    ans = temp;
  }

  return ans;
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(4));
console.log(getRow(33));
