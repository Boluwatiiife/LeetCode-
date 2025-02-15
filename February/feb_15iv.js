// 1436. Destination City

const destCity = function (paths) {
  let outgoing = new Set();

  for ([start, end] of paths) {
    outgoing.add(start);
  }

  for ([start, end] of paths) {
    if (!outgoing.has(end)) {
      return end;
    }
  }
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);
console.log(destCity([["A", "Z"]]));
console.log(
  destCity([
    ["pYyNGfBYbm", "wxAscRuzOl"],
    ["kzwEQHfwce", "pYyNGfBYbm"],
  ])
);
