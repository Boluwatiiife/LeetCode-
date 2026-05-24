// 2582. Pass the Pillow

const passThePillow = function (n, time) {
  let no = n - 1;
  let rem = time % no;
  let div = Math.floor(time / no);

  return div % 2 === 0 ? 1 + rem : n - rem;
};

console.log(passThePillow(4, 5));
console.log(passThePillow(3, 2));
console.log(passThePillow(6, 20));
console.log(passThePillow(4, 2));
