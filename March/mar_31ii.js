// 93. Restore IP Addresses

const restoreIpAddresses = function (s) {
  let arr = [];

  const fourrrparts = (ss) => {
    function backtrack(index, path) {
      if (path.length > 4) return;
      if (index === ss.length && path.length === 4) {
        arr.push([...path]);
        return;
      }

      for (let len = 1; len <= 3; len++) {
        if (index + len > ss.length) break;

        let part = ss.slice(index, index + len);

        if (part.length > 1 && part[0] === "0") continue;

        path.push(part);
        backtrack(index + len, path);
        path.pop();
      }
    }
    backtrack(0, []);
  };
  fourrrparts(s);

  let anss = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if (temp.every((xx) => Number(xx) >= 0 && Number(xx) <= 255)) {
      temp = temp.join(".");
      anss.push(temp);
    }
  }

  return anss;
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));
console.log(restoreIpAddresses("1921681312"));
