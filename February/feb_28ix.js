// 2078. Two Furthest Houses With Different Colors

const maxDistance = function (colors) {
  let time = 0;
  let timee = 0;
  let count = 0;
  let countt = 0;

  for (let i = 1; i < colors.length; i++) {
    time++;
    if (colors[i] !== colors[0]) {
      count = time;
    }
  }
  for (let i = colors.length - 2; i >= 0; i--) {
    timee++;
    if (colors[i] !== colors[colors.length - 1]) {
      countt = timee;
    }
  }
  //   return countt;
  return Math.max(count, countt);
};

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
console.log(maxDistance([1, 8, 3, 8, 3]));
console.log(maxDistance([0, 1]));
console.log(maxDistance([4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4]));
