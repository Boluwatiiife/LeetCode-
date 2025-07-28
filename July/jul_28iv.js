// 2194. Cells in a Range on an Excel Sheet

const cellsInRange = function (s) {
  let one = s[0].toLowerCase().charCodeAt(0) - 96;
  let two = s[3].toLowerCase().charCodeAt(0) - 96;
  let oneee = Number(s[1]);
  let twooo = Number(s[4]);

  let ans = [];

  for (let i = one; i <= two; i++) {
    for (let j = oneee; j <= twooo; j++) {
      ans.push(String.fromCharCode(96 + i).toLocaleUpperCase() + String(j));
    }
  }

  return ans;
};

console.log(cellsInRange("K1:L2"));
console.log(cellsInRange("A1:F1"));
console.log(cellsInRange("G4:K4"));
