// 2833. Furthest Point From Origin

const furthestDistanceFromOrigin = function (moves) {
  const word = moves.split("");
  let one = "";
  let two = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "_") {
      one += "R";
      two += "L";
    } else {
      one += word[i];
      two += word[i];
    }
  }

  function checkk(temp) {
    let point = 0;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === "L") point--;
      if (temp[i] === "R") point++;
    }
    return Math.abs(point);
  }

  return Math.max(checkk(one), checkk(two));
};

console.log(furthestDistanceFromOrigin("L_RL__R"));
console.log(furthestDistanceFromOrigin("_R__LL_"));
console.log(furthestDistanceFromOrigin("_______"));
console.log(furthestDistanceFromOrigin("LL___RRRRRR"));
console.log(furthestDistanceFromOrigin("L_RR_L"));
