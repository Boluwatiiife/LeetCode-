// 3280. Convert Date to Binary

const convertDateToBinary = function (date) {
  let arr = date.split("-").map(Number);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString(2);
  }

  return arr.join("-");
};

console.log(convertDateToBinary("2080-02-29"));
console.log(convertDateToBinary("1900-01-01"));
