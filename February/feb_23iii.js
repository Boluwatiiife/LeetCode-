// 1784. Check if Binary String Has at Most One Segment of Ones

const checkOnesSegment = function (s) {
  return !s.includes("01");
  //   let index = [];

  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === "1") {
  //       index.push(i);
  //     }
  //   }
  //   if (index.length === 1) return true;
  //   for (let i = 1; i < index.length; i++) {
  //     if (index[i] - index[i - 1] !== 1) return false;
  //   }
  //   return true;
};

console.log(checkOnesSegment("1001"));
console.log(checkOnesSegment("110"));
console.log(checkOnesSegment("1"));
console.log(checkOnesSegment("11"));
console.log(checkOnesSegment("10"));
console.log(checkOnesSegment("1011"));
console.log(checkOnesSegment("11"));
