// 3114. Latest Time You Can Obtain After Replacing Characters

const findLatestTime = function (s) {
  let arr = s.split("");

  if (arr[0] === "?" && arr[1] > 1) {
    arr[0] = "0";
  }
  if (arr[0] === "?") {
    arr[0] = "1";
  }

  if (arr[1] === "?" && arr[0] === "0") {
    arr[1] = "9";
  }
  if (arr[1] === "?" && arr[0] === "1") {
    arr[1] = "1";
  }
  if (arr[3] === "?") {
    arr[3] = "5";
  }
  if (arr[4] === "?") {
    arr[4] = "9";
  }

  return arr.join("");
};

console.log(findLatestTime("1?:?4"));
console.log(findLatestTime("0?:5?"));
console.log(findLatestTime("0?:??"));
console.log(findLatestTime("?3:12"));
