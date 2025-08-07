// 3602. Hexadecimal and Hexatrigesimal Conversion

const concatHex36 = function (n) {
  return (
    (n * n).toString(16).toUpperCase() + (n * n * n).toString(36).toUpperCase()
  );
};

console.log(concatHex36(13));
console.log(concatHex36(36));
