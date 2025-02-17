// 1523. Count Odd Numbers in an Interval Range

const countOdds = function (low, high) {
  let arr = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      arr++;
    }
  }
  return arr;
};

console.log(countOdds(3, 7));
console.log(countOdds(8, 10));

// time efficient solution
const odd_countt = function (low, high) {
  return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};

console.log(odd_countt(3, 7));
console.log(odd_countt(8, 10));
console.log(odd_countt(2, 89));
console.log(odd_countt(33, 89));
