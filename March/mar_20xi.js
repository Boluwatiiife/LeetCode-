// 3206. Alternating Groups I

const numberOfAlternatingGroups = function (colors) {
  colors.push(colors[0]);
  colors.push(colors[1]);

  let count = 0;

  for (let i = 0; i < colors.length - 2; i++) {
    let arr = [];
    arr.push(colors[i]);
    arr.push(colors[i + 1]);
    arr.push(colors[i + 2]);
    if (arr[0] === arr[2] && arr[0] !== arr[1]) {
      count++;
    }
  }
  return count;
};

console.log(numberOfAlternatingGroups([1, 1, 1]));
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]));
