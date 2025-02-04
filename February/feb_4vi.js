// 914. X of a Kind in a Deck of Cards

const hasGroupsSizeX = function (deck) {
  if (deck.length === 1) return false;
  const sortt = deck.sort((a, b) => a - b);
  //   return sortt;
  const count_map = new Map();

  // count occurences
  for (const num of deck) {
    count_map.set(num, (count_map.get(num) || 0) + 1);
  }
  let arr = Array.from(count_map.values());

  // find the greatest common divisor
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let group_size = arr[0];

  for (let i = 1; i < arr.length; i++) {
    group_size = gcd(group_size, arr[i]);
    if (group_size === 1) return false;
  }
  return group_size > 1;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3, 3, 4]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2, 3, 3, 3, 3]));
