// 118. Pascal's Triangle

const generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let ans = [[1], [1, 1]];

  for (let i = 3; i <= numRows; i++) {
    const arr = ans[ans.length - 1];
    let temp = [];
    for (let j = 0; j < i - 2; j++) {
      temp.push(arr[j] + arr[j + 1]);
    }
    temp.push(1);
    temp.unshift(1);
    ans.push(temp);
  }

  return ans;
};

console.log(generate(5));
console.log(generate(1));
