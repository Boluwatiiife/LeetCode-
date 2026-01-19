// 3783. Mirror Distance of an Integer

const mirrorDistance = function (n) {
  const one = Number(n.toString().split("").reverse().join(""));

  return Math.abs(n - one);
};

console.log(mirrorDistance(25));
console.log(mirrorDistance(10));
console.log(mirrorDistance(7));
