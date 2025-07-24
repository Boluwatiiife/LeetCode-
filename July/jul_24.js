// 1886. Determine Whether Matrix Can Be Obtained By Rotation

const findRotation = function (mat, target) {
  function reverseArr(arr) {
    const n = arr.length;
    const m = arr[0].length;
    let neww = [];

    for (let i = 0; i < m; i++) {
      let temp = [];
      for (let j = 0; j < n; j++) {
        temp.push(arr[j][i]);
      }
      neww.unshift(temp);
    }

    return neww;
  }

  function checkSamesiess(one, two) {
    const onee = one
      .map((arr) => arr.map((xx) => String(xx)).join(""))
      .join("");
    const twoo = two
      .map((arr) => arr.map((xx) => String(xx)).join(""))
      .join("");

    return onee === twoo;
  }
  if (checkSamesiess(mat, target)) return true;

  let temp = reverseArr(mat);
  for (let i = 0; i < 4; i++) {
    if (checkSamesiess(temp, target)) return true;
    temp = reverseArr(temp);
  }
  return false;
};

console.log(
  findRotation(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
);
console.log(
  findRotation(
    [
      [0, 1],
      [1, 1],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
);
console.log(
  findRotation(
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]
  )
);
console.log(
  findRotation(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 1],
      [1, 1, 0],
      [0, 0, 0],
    ]
  )
);
console.log(
  findRotation(
    [
      [1, 1, 1, 1],
      [1, 1, 0, 1],
      [0, 0, 1, 0],
      [0, 0, 1, 1],
    ],
    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [1, 1, 1, 1],
    ]
  )
);
console.log(
  findRotation(
    [
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 1],
    ],
    [
      [0, 0, 1],
      [1, 1, 0],
      [1, 1, 1],
    ]
  )
);
