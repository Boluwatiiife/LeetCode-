// 2739. Total Distance Traveled

const distanceTraveled = function (mainTank, additionalTank) {
  let sum = mainTank;
  let summ = 0;

  let distt = 0;
  while (true) {
    if (sum === 0) return distt;
    summ++;
    sum--;
    distt += 10;
    if (summ % 5 === 0 && additionalTank > 0) {
      sum += 1;
      additionalTank--;
    }
  }
};

console.log(distanceTraveled(5, 10));
console.log(distanceTraveled(1, 2));
console.log(distanceTraveled(9, 1));
console.log(distanceTraveled(900, 21));
