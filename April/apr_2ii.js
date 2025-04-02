// 165. Compare Version Numbers

const compareVersion = function (version1, version2) {
  let onee = version1.split(".");
  let twoo = version2.split(".");

  let on = Number(onee[0]),
    tw = Number(twoo[0]);
  if (on > tw) return 1;
  if (on < tw) return -1;

  onee.splice(0, 1);
  twoo.splice(0, 1);

  for (let i = onee.length - 1; i >= 0; i--) {
    if (Number(onee[i]) === 0) {
      onee.splice(i, 1);
    } else {
      break;
    }
  }
  for (let i = twoo.length - 1; i >= 0; i--) {
    if (Number(twoo[i]) === 0) {
      twoo.splice(i, 1);
    } else {
      break;
    }
  }

  let maxx = Math.max(onee.length, twoo.length);

  while (onee.length < maxx) {
    onee.push("0");
  }
  while (twoo.length < maxx) {
    twoo.push("0");
  }

  onee = onee.join("");
  twoo = twoo.join("");

  onee = BigInt(onee);
  twoo = BigInt(twoo);

  return onee < twoo ? -1 : onee > twoo ? 1 : 0;
};

console.log(compareVersion("1.2", "1.10"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0.0"));
console.log(compareVersion("7.5.2.4", "7.5.3"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("0.1", "1.1"));
console.log(
  compareVersion(
    "19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.00.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000",
    "19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000"
  )
);
