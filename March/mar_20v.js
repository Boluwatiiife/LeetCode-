// 3168. Minimum Number of Chairs in a Waiting Room

const minimumChairs = function (s) {
  let ee = 0,
    maxx = 0;

  for (char of s) {
    if (char === "E") {
      ee++;
    }
    if (char === "L") {
      ee--;
    }
    maxx = Math.max(ee, maxx);
  }
  return maxx;
};

console.log(minimumChairs("EEEEEEE"));
console.log(minimumChairs("ELELEEL"));
console.log(minimumChairs("ELEELEELLL"));
