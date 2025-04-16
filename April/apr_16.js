// 1871. Jump Game VII

const canReach = function (s, minJump, maxJump) {
  const n = s.length;
  const jump = new Array(n).fill(false);
  jump[0] = true;

  let window_sum = 0;
  for (let i = 1; i < n; i++) {
    if (i >= minJump) window_sum += jump[i - minJump];
    if (i > maxJump) window_sum -= jump[i - maxJump - 1];

    if (s[i] === "0" && window_sum > 0) jump[i] = true;
  }

  return jump[n - 1];
};

console.log(canReach("011010", 2, 3));
console.log(canReach("01101110", 2, 3));
console.log(canReach("0000000000", 2, 5));
console.log(canReach("011101101110", 3, 4));
console.log(canReach("011111101110", 3, 4));
console.log(canReach("0000000000", 8, 8));
console.log(canReach("00", 1, 1));
console.log(canReach("00111011110", 1, 2));
console.log(
  canReach("0111111111111111111111111111111101111101111111111111111110", 5, 26)
);
console.log(canReach("00111010", 3, 5));
console.log(canReach("011001110001000", 3, 5));
