// 3147. Taking Maximum Energy From the Mystic Dungeon

const maximumEnergy = function (energy, k) {
  const n = energy.length;
  let maxx = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (i + k >= n) {
      maxx = Math.max(maxx, energy[i]);
    } else {
      energy[i] += energy[i + k];
      maxx = Math.max(maxx, energy[i]);
    }
  }

  return maxx;
};

console.log(maximumEnergy([5, 2, -10, -5, 1], 3));
console.log(maximumEnergy([-2, -3, -1], 2));
console.log(maximumEnergy([-9, -2, -6, -5, -8, 3, 0], 1));
console.log(maximumEnergy([1, -3, 10, 7], 1));
