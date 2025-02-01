// 605. Can Place Flowers

const canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i + 2) {
    if (n === 0) {
      if (flowerbed[i] === 1 && flowerbed[i + 1] === 0) {
        // return true;
        i = i + 2;
      }
      return true;
    }
  }

  let sortt = flowerbed.sort((a, b) => a - b);
  //   return sortt;
  for (let i = 0; i < n; i++) {
    if (sortt[i] === 0) {
      sortt[i] = 1;
    }
  }
  //   return sortt;
  for (let i = 0; i < sortt.length; i = i + 2) {
    // sortt[i] = "88";
    if (sortt[i] === 0 && sortt[i + 1] === 1) {
      [sortt[i], sortt[i + 1]] = [sortt[i + 1], sortt[i]];
    } //   i = i + 2;
    else if (sortt[i] === 0 && sortt[i - 1] === 1) {
      [sortt[i], sortt[i - 1]] = [sortt[i - 1], sortt[i]];
    } //   i = i + 2;
    // } else if (sortt[i] === 0 && sortt[i + 1] === 1) {
    //   //   let tempp = sortt[i];
    //   //   sortt[i] = sortt[i + 1];
    //   //   sortt[i + 1] = tempp;
    //   [sortt[i], sortt[i + 1]] = [sortt[i + 1], sortt[i]];
    // }
  }
  for (let i = 0; i < sortt.length; i++) {
    if (sortt[i] === 1 && sortt[i + 1] === 1) {
      return false;
    }
  }
  return true;
  return sortt;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0));
