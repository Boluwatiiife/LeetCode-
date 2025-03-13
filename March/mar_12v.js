// 2696. Minimum String Length After Removing Substrings

const minLength = function (s) {
  let arr = s.split("");

  while (true) {
    for (let i = 0; i < arr.length; i++) {
      let temp = arr.join("");
      if (!temp.includes("AB") && !temp.includes("CD")) {
        return temp.length;
      }
      if (arr[i] === "A" && arr[i + 1] === "B") {
        arr.splice(i, 2);
      }
      if (arr[i] === "C" && arr[i + 1] === "D") {
        arr.splice(i, 2);
      }
    }
  }
};

console.log(minLength("ABFCACDB"));
console.log(minLength("ACBBD"));
