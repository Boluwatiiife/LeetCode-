// 926. Flip String to Monotone Increasing

const minFlipsMonoIncr = function (s) {
  let flip = 0,
    ones = 0;

  for (const char of s) {
    if (char === "1") ones++;
    else {
      flip = Math.min(flip + 1, ones);
    }
  }

  return flip;
};

console.log(minFlipsMonoIncr("00110"));
console.log(minFlipsMonoIncr("010110"));
console.log(minFlipsMonoIncr("00011000"));
console.log(minFlipsMonoIncr("010110"));
