// 1736. Latest Time by Replacing Hidden Digits

const maximumTime = function (time) {
  let input = time.split("");
  //   return input;
  for (let i = 0; i < input.length; i++) {
    if (input[0] === "?" && input[1] > 3) {
      input[0] = "1";
    } else if (input[0] === "?") {
      input[0] = "2";
    } else if (input[1] === "?" && input[0] === "2") {
      input[1] = "3";
    } else if (input[1] === "?") {
      input[1] = "9";
    } else if (input[3] === "?") {
      input[3] = "5";
    } else if (input[4] === "?") {
      input[4] = "9";
    }
  }
  return input.join("");
};

console.log(maximumTime("2?:?0"));
console.log(maximumTime("0?:3?"));
console.log(maximumTime("1?:22"));
console.log(maximumTime("1?:??"));
console.log(maximumTime("?3:03"));
console.log(maximumTime("?4:03"));
console.log(maximumTime("?6:03"));
