// 1598. Crawler Log Folder

const minOperations = function (logs) {
  let count = 0;
  for (const temp of logs) {
    if (temp[0] === "." && temp[1] === ".") {
      count--;
      if (count < 0) count = 0;
    } else if (temp[0] === "." && temp[1] === "/") continue;
    else count++;
  }
  return count <= 0 ? 0 : count;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
console.log(minOperations(["d1/", "../", "../", "../"]));
console.log(
  minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"])
);
