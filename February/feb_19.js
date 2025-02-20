// 1566. Detect Pattern of Length M Repeated K or More Times

const containsPattern = function (arr, m, k) {
  let n = arr.length;

  for (let i = 0; i + m * k <= n; i++) {
    let pattern = arr.slice(i, i + m);
    let count = 1;

    for (let j = i + m; j + m <= n; j += m) {
      if (arr.slice(j, j + m).join() === pattern.join()) {
        count++;
      } else {
        break;
      }

      if (count === k) return true;
    }
  }

  return false;
};

console.log(containsPattern([1, 2, 4, 4, 4, 4], 1, 3));
console.log(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2));
console.log(containsPattern([1, 2, 1, 2, 1, 3], 2, 3));
