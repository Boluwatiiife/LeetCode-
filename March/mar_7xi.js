// 2383. Minimum Hours of Training to Win a Competition

const minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let energ = initialEnergy;
  let exp = initialExperience;
  let count = 0;
  let n = energy.length;

  for (let i = 0; i < n; i++) {
    if (energ > energy[i]) {
      energ = energ - energy[i];
    } else {
      let temp = 1 + (energy[i] - energ);
      energ += temp;
      energ -= energy[i];
      count += temp;
    }
    if (exp > experience[i]) {
      exp += experience[i];
    } else {
      let temp = 1 + (experience[i] - exp);
      exp += temp;
      exp += experience[i];
      count += temp;
    }
  }
  return count;
};

console.log(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1]));
console.log(minNumberOfHours(2, 4, [1], [3]));
