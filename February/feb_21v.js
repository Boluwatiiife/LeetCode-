// 1678. Goal Parser Interpretation

const interpret = function (command) {
  let resultt = [];
  let arr = command.split("");
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" && arr[i + 1] === ")") {
      resultt.push("o");
    } else resultt.push(arr[i]);
  }
  //   return zero;
  const anss = resultt.filter((xx) => xx !== "(" && xx !== ")");

  return anss.join("");
  return resultt.join("");
};

console.log(interpret("G()(al)"));
console.log(interpret("G()()()()(al)"));
console.log(interpret("(al)G(al)()()G"));
