// 1764. Form Array by Concatenating Subarrays of Another Array

const canChoose = function (groups, nums) {
  function compareArr(one, two) {
    for (let i = 0; i < one.length; i++) {
      if (one[i] !== two[i]) return false;
    }
    return true;
  }
  const n = nums.length;
  const nn = groups.length;
  let dex = 0;
  let no = 0;
  let arr = [];
  while (no < nn) {
    for (let i = dex; i < n; i++) {
      const temp = nums.slice(i, i + groups[no].length);
      if (compareArr(groups[no], temp)) {
        dex = i + groups[no].length;
        arr.push(temp);
        break;
      }
    }
    no++;
  }
  return arr.length === nn ? true : false;
};

console.log(
  canChoose(
    [
      [1, -1, -1],
      [3, -2, 0],
    ],
    [1, -1, 0, 1, -1, -1, 3, -2, 0]
  )
);
console.log(
  canChoose(
    [
      [1, -1, -1],
      [3, -2, 0],
    ],
    [1, -1, 0, 1, -1, -1, 3, -2, 0, 4, 4]
  )
);
console.log(
  canChoose(
    [
      [10, -2],
      [1, 2, 3, 4],
    ],
    [1, 2, 3, 4, 10, -2]
  )
);
console.log(
  canChoose(
    [
      [1, 2, 3],
      [3, 4],
    ],
    [7, 7, 1, 2, 3, 4, 7, 7]
  )
);
console.log(
  canChoose(
    [[9099312, -7882487, -1441304, 6624042, -6043305]],
    [-1441304, 9099312, -7882487, -1441304, 6624042, -6043305, -1441304]
  )
);

console.log(
  canChoose(
    [
      [
        6636698, 4693069, -2178984, -2253405, -2732131, 8550889, -2324014,
        -2561263,
      ],
      [-8973571, -9146179, 7704305, -1063430, -6569826],
      [2791091],
      [
        -9691134, 651171, 9835817, 4163881, 4944714, 8166788, -9025553,
        -9250995, 1599781,
      ],
    ],
    [
      8550889, -2178984, 6636698, 4693069, -2178984, -2253405, -2732131,
      8550889, -2324014, -2561263, -2324014, 8550889, -8973571, -9146179,
      7704305, -1063430, -6569826, 2791091, -9691134, 651171, 9835817, 4163881,
      4944714, 8166788, -9025553, -9250995, 1599781,
    ]
  )
);
