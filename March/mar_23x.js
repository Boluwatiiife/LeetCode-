// 3461. Check If Digits Are Equal in String After Operations I

const hasSameDigits = function (s) {
  let xxx = s;
  while (xxx.length > 2) {
    arr = xxx.split("").map(Number);
    let neww = "";
    for (let i = 0; i < arr.length - 1; i++) {
      let dd = (arr[i] + arr[i + 1]) % 10;
      neww += dd.toString();
    }
    xxx = neww;
  }

  return xxx[0] === xxx[1] ? true : false;
};

console.log(hasSameDigits("3902"));
console.log(hasSameDigits("34789"));
