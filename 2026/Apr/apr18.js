// 3783. Mirror Distance of an Integer

const mirrorDistance = function (n) {
  return Math.abs(n - Number(n.toString().split("").reverse().join("")));
};

console.log(mirrorDistance(25));
console.log(mirrorDistance(10));
console.log(mirrorDistance(7));
