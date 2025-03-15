// 2833. Furthest Point From Origin

const furthestDistanceFromOrigin = function (moves) {
  let left = 0,
    right = 0;

  for (char of moves) {
    if (char === "L") {
      left++;
    }
    if (char === "R") {
      right++;
    }
  }
  let max = Math.max(left, right);

  let arr = moves.split("");
  for (let i = 0; i < arr.length; i++) {
    if (left === max && right === max) {
      if (arr[i] === "_") {
        arr[i] = "R";
      }
    }
    if (left === max) {
      if (arr[i] === "_") {
        arr[i] = "L";
      }
    }
    if (right === max) {
      if (arr[i] === "_") {
        arr[i] = "R";
      }
    }
  }
  let count = 0;
  for (char of arr) {
    if (char === "L") {
      count++;
    }
    if (char === "R") {
      count--;
    }
  }

  return Math.abs(count);
};

console.log(furthestDistanceFromOrigin("L_RL__R"));
console.log(furthestDistanceFromOrigin("_R__LL_"));
console.log(furthestDistanceFromOrigin("_______"));
