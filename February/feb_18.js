// 1528. Shuffle String

const restoreString = function (s, indices) {
  let arr = s.split("");
  let resultt = [];
  for (let i = 0; i < arr.length; i++) {
    resultt[indices[i]] = arr[i];
  }
  return resultt.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("abc", [0, 1, 2]));
console.log(restoreString("luob", [2, 3, 1, 0]));
