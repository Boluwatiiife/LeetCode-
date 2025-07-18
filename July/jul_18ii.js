// 1496. Path Crossing

const isPathCrossing = function (path) {
  let sett = new Set();
  sett.add("0-0");
  let use = [0, 0];
  let count = 1;

  for (const temp of path) {
    count++;
    if (temp === "N") {
      use[1]++;
      sett.add(String(use[0]) + "-" + String(use[1]));
    } else if (temp === "S") {
      use[1]--;
      sett.add(String(use[0]) + "-" + String(use[1]));
    } else if (temp === "E") {
      use[0]++;
      sett.add(String(use[0]) + "-" + String(use[1]));
    } else if (temp === "W") {
      use[0]--;
      sett.add(String(use[0]) + "-" + String(use[1]));
    }
    if (count > sett.size) return true;
  }

  //   return sett;
  return false;
};

console.log(isPathCrossing("NES"));
console.log(isPathCrossing("NESWW"));
console.log(isPathCrossing("ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS"));
