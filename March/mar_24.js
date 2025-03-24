// 2511. Maximum Enemy Forts That Can Be Captured

const captureForts = function (forts) {
  let maxx = 0;

  for (let i = 0; i < forts.length; i++) {
    for (let j = i; j < forts.length; j++) {
      if (forts[i] === 1 && forts[j] === -1) {
        let temp = forts.slice(i + 1, j);
        // return temp;
        if (temp.every((xx) => xx === 0)) {
          maxx = Math.max(maxx, temp.length);
        }
      }
    }
  }
  for (let i = 0; i < forts.length; i++) {
    for (let j = i; j < forts.length; j++) {
      if (forts[i] === -1 && forts[j] === 1) {
        let temp = forts.slice(i + 1, j);
        // return temp;
        if (temp.every((xx) => xx === 0)) {
          maxx = Math.max(maxx, temp.length);
        }
      }
    }
  }
  return maxx;
};

console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1]));
console.log(captureForts([0, 0, 1, -1]));
console.log(captureForts([1, 0, 1, 0, 0, 1, 0, 1, 1, 0, -1, 1, -1, -1]));
