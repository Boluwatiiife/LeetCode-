// 2103. Rings and Rods

const countPoints = function (rings) {
  let zer = "",
    one = "",
    two = "",
    three = "",
    four = "",
    five = "",
    six = "",
    seven = "",
    eight = "",
    nine = "";

  for (let i = 1; i < rings.length; i = i + 2) {
    if (rings[i] === "0") {
      zer += rings[i - 1];
    }
    if (rings[i] === "1") {
      one += rings[i - 1];
    }
    if (rings[i] === "2") {
      two += rings[i - 1];
    }
    if (rings[i] === "3") {
      three += rings[i - 1];
    }
    if (rings[i] === "4") {
      four += rings[i - 1];
    }
    if (rings[i] === "5") {
      five += rings[i - 1];
    }
    if (rings[i] === "6") {
      six += rings[i - 1];
    }
    if (rings[i] === "7") {
      seven += rings[i - 1];
    }
    if (rings[i] === "8") {
      eight += rings[i - 1];
    }
    if (rings[i] === "9") {
      nine += rings[i - 1];
    }
  }
  let arr = [];
  arr.push(zer, one, two, three, four, five, six, seven, eight, nine);
  let count = 0;
  for (char of arr) {
    if (char.includes("R") && char.includes("G") && char.includes("B")) {
      count++;
    }
  }
  return count;
};

console.log(countPoints("B0B6G0R6R0R6G9"));
console.log(countPoints("B0R0G0R9R0B0G0"));
console.log(countPoints("G4"));
