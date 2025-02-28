// 2042. Check if Numbers Are Ascending in a Sentence

const areNumbersAscending = function (s) {
  let word = s.split(" ");
  let temp = 0;
  for (let i = 0; i < word.length; i++) {
    if (Number.isFinite(Number(word[i]))) {
      let num = Number(word[i]);
      if (num > temp) {
        temp = num;
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
console.log(areNumbersAscending("hello world 5 x 5"));
console.log(
  areNumbersAscending(
    "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
  )
);
