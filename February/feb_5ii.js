// 922. Sort Array By Parity II

const sortArrayByParityII = function (nums) {
  let evenn = nums.filter((x) => x % 2 === 0);
  let oddd = nums.filter((x) => x % 2 !== 0);
  let resultt = [];
  let length = evenn.length;

  for (let i = 0; i < length; i++) {
    resultt.push(evenn[i]);
    resultt.push(oddd[i]);
  }
  return resultt;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
console.log(sortArrayByParityII([4, 2, 4, 3, 5, 7]));
console.log(sortArrayByParityII([2, 3]));

const arrayByParityy = function (nums) {
  let n = nums.length;
  let even_index = 0;
  let odd_index = 1;
  let resultt = new Array(n);

  for (let num of nums) {
    if (num % 2 === 0) {
      resultt[even_index] = num;
      even_index += 2;
    } else {
      resultt[odd_index] = num;
      odd_index += 2;
    }
  }
  return resultt;
};

console.log(arrayByParityy([4, 2, 5, 7]));
console.log(arrayByParityy([4, 2, 4, 3, 5, 7]));
console.log(arrayByParityy([2, 3]));
