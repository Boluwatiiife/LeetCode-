// 3921. Score Validator

const scoreValidator = function (events) {
  let score = 0,
    counter = 0;

  for (const temp of events) {
    if (counter >= 10) return [score, counter];
    else {
      if (temp === "W") counter++;
      else if (temp === "WD") score++;
      else if (temp === "NB") score++;
      else score += Number(temp);
    }
  }

  return [score, counter];
};

console.log(scoreValidator(["1", "4", "W", "6", "WD"]));
console.log(scoreValidator(["WD", "NB", "0", "4", "4"]));
console.log(
  scoreValidator(["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]),
);
