// 777. Swap Adjacent in LR String

const canTransform = function (start, result) {
  if (start.replace(/X/g, "") !== result.replace(/X/g, "")) return false;

  let i = 0,
    j = 0;
  const n = start.length;

  while (i < n && j < n) {
    // skip 'X' in both strings
    while (i < n && start[i] === "X") i++;
    while (j < n && result[j] === "X") j++;

    if (i === n && j === n) return true;
    if (i === n || j === n) return false;

    if (start[i] !== result[j]) return false;

    if (start[i] === "L" && i < j) return false;
    if (start[i] === "R" && i > j) return false;

    i++;
    j++;
  }
  return true;
};

console.log(canTransform("RXXLRXRXL", "XRLXXRRLX"));
console.log(canTransform("X", "L"));
console.log(canTransform("LXXLXRLXXL", "XLLXRXLXLX"));
