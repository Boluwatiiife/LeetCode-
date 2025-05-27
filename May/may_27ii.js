// 2491. Divide Players Into Teams of Equal Skill

const dividePlayers = function (skill) {
  skill.sort((a, b) => a - b);
  const n = skill.length;
  let left = 0,
    right = n - 1;
  let sum = 0;
  let temp = skill[left] + skill[right];
  sum += skill[left] * skill[right];
  left++;
  right--;

  while (left < right) {
    let no = skill[left] + skill[right];
    if (no === temp) {
      sum += skill[left] * skill[right];
      left++;
      right--;
    } else {
      return -1;
    }
  }

  return sum;
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
console.log(dividePlayers([3, 4]));
console.log(dividePlayers([1, 1, 2, 3]));
console.log(dividePlayers([1, 2, 2, 3]));
