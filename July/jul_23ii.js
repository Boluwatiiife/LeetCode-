// 1710. Maximum Units on a Truck

const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let count = 0;
  let units = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    const [box, unit] = boxTypes[i];
    count += box;
    const temp = box * unit;
    units += temp;
    if (count > truckSize) {
      count -= box;
      units -= temp;
      units += unit * (truckSize - count);
      break;
    }
  }

  return units;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);
console.log(
  maximumUnits(
    [
      [1, 10],
      [2, 5],
      [4, 7],
      [7, 9],
    ],
    10
  )
);
