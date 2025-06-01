// 832. Flipping an Image

const flipAndInvertImage = function (image) {
  const n = image.length;
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = image[i].length - 1;
    while (left <= right) {
      const temp = image[i][left];
      image[i][left] = image[i][right] === 1 ? 0 : 1;
      image[i][right] = temp === 1 ? 0 : 1;
      left++;
      right--;
    }
  }
  return image;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
);
