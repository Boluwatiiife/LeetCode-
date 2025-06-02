// 2337. Move Pieces to Obtain a String

const canChange = function (start, target) {
  const n = start.length;
  let i = 0;
  let j = 0;

  while (i < n || j < n) {
    while (i < n && start[i] === "_") i++;
    while (j < n && target[j] === "_") j++;

    if (i < n !== j < n) return false;
    if (i < n && j < n) {
      if (start[i] !== target[j]) return false;
    }

    if (start[i] === "L" && j > i) return false;
    if (start[i] === "R" && j < i) return false;
    i++;
    j++;
  }
  return true;
};

console.log(canChange("_L__R__R_", "L______RR"));
console.log(canChange("R_L_", "__LR"));
console.log(canChange("_R", "R_"));
