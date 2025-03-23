// 3483. Unique 3-Digit Even Numbers

const totalNumbers = function (digits) {
  let count = new Map();
  for (no of digits) {
    count.set(no, (no, count.get(no) || 0) + 1);
  }
  //   return count;
  const freqqq = function (xxx) {
    let freeee = new Map();
    for (no of xxx) {
      freeee.set(no, (freeee.get(no) || 0) + 1);
    }
    for (no of xxx) {
      if (count.get(no) < freeee.get(no)) {
        return false;
      }
    }
    return true;
  };
  let n = digits.length;
  let resultt = new Set();

  let arrr = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k) {
          let temp =
            digits[i].toString() + digits[j].toString() + digits[k].toString();
          arrr.push(temp);
          if (temp[0] !== "0") {
            let neww = Number(temp);
            let arr = temp.split("").map(Number);
            if (freqqq(arr) && neww % 2 === 0) {
              resultt.add(neww);
            }
          }
        }
      }
    }
  }
  return resultt.size;
};

console.log(totalNumbers([1, 2, 3, 4]));
console.log(totalNumbers([0, 2, 2]));
console.log(totalNumbers([6, 6, 6]));
console.log(totalNumbers([1, 3, 5]));
console.log(totalNumbers([4, 7, 7, 3]));
