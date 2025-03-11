// 2629. Function Composition

const compose = function (functions) {
  return function (x) {
    x = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4));
console.log(compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], 1));
console.log(compose([], 42));
