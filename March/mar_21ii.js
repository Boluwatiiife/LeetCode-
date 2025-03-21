// 3248. Snake in Matrix

const finalPositionOfSnake = function (n, commands) {
  let sum = 0;

  for (let i = 0; i < commands.length; i++) {
    let temp = commands[i];

    if (temp === "RIGHT") {
      sum += 1;
    }
    if (temp === "LEFT") {
      sum -= 1;
    }
    if (temp === "DOWN") {
      sum += n;
    }
    if (temp === "UP") {
      sum -= n;
    }
  }

  return sum;
};

console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"]));
console.log(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"]));
