// 2511. Maximum Enemy Forts That Can Be Captured

const captureForts = function (forts) {
  let word = "";
  for (no of forts) {
    word += no.toString();
  }
  let arr = word.split("-1");
  //   return arr;
  arr[0] = Number(arr[0]);
  arr[0] = arr[0].toString();

  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split("");
    // return temp;
    if (i === 0 && temp.length < 2) {
      nums.push(0);
    }
    if (
      i === arr.length - 1 &&
      temp[0] === "1" &&
      (temp[temp.length - 1] === "1" || temp[temp.length - 1] === "0")
    ) {
      nums.push(0);
      continue;
    }
    let count = 0;
    let xxx = [];

    // return temp;
    if (temp.length > 1) {
      if (temp[0] === "1") {
        let counttt = 0;
        for (no of temp) {
          if (no === "0") {
            counttt++;
          } else {
            xxx.push(counttt);
            counttt = 0;
          }
        }
      } else if (temp[0] === "0") {
        for (no of temp) {
          if (no === "0") {
            count++;
          } else {
            break;
          }
        }
      }
      //   for (no of temp) {
      //     if (no === "0") {
      //       count++;
      //     } else {
      //       nums.push(count);
      //       count = 0;
      //     }
      //   }
    }
    nums.push(count);
    nums.push(Math.min(...xxx));
  }

  //   return nums;
  nums = nums.filter((xx) => xx !== Infinity);
  return Math.max(...nums);
  return arr;
};

console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1]));
console.log(captureForts([0, 0, 1, -1]));
console.log(captureForts([-1, -1, 1, -1, -1, 0]));
console.log(captureForts([1, -1, 1, 0, -1, -1, -1, -1, -1, -1, 1]));
console.log(captureForts([-1, -1, 0, 1, 0, 0, 1, -1, 1, 0]));
console.log(captureForts([1, 0, 1, 0, 0, 1, 0, 1, 1, 0, -1, 1, -1, -1]));
