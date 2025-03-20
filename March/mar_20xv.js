// 3226. Number of Bit Changes to Make Two Integers Equal

const minChanges = function (n, k) {
  let one = n.toString(2);
  let two = k.toString(2);
  let maxx = Math.max(one.length, two.length);
  let nn = Math.abs(one.length - two.length);

  if (one.length !== maxx) {
    for (let i = 0; i < nn; i++) {
      one = "0" + one;
    }
  }
  if (two.length !== maxx) {
    for (let i = 0; i < nn; i++) {
      two = "0" + two;
    }
  }

  let onee = one.split("");
  let twoo = two.split("");
  let count = 0;

  for (let i = 0; i < onee.length; i++) {
    if (onee[i] === "1" && twoo[i] === "0") {
      onee[i] = "0";
      count++;
    }
  }
  onee = onee.join("");
  twoo = twoo.join("");

  return onee === twoo ? count : -1;
};

console.log(minChanges(13, 4));
console.log(minChanges(21, 21));
console.log(minChanges(14, 13));
