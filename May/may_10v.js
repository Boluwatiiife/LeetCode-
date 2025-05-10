// 457. Circular Array Loop

const circularArr = function (arr) {
  function find_next_dex(arr, is_forward, curr_dex) {
    const curr_is_forward = arr[curr_dex] > 0;
    if (curr_is_forward !== is_forward) return -1;

    const next_dex = (curr_dex + arr[curr_dex]) % arr.length;
    if (next_dex < 0) {
      next_dex += arr.length;
    }
    if (next_dex === curr_dex) {
      return -1;
    }
    return next_dex;
  }

  for (let i = 0; i < arr.length; i++) {
    let slow = i,
      fast = i;

    const is_forward = arr[i] > 0;

    while (true) {
      // move pointers forward, slow++, fast+=2
      slow = find_next_dex(arr, is_forward, slow);
      fast = find_next_dex(arr, is_forward, fast);
      if (fast !== -1) {
        fast = find_next_dex(arr, is_forward, fast);
      }

      // what are our break cases?
      if (slow === -1 || fast === -1 || fast === slow) break;
    }
    if (fast !== -1 && slow !== -1 && fast === slow) return true;
  }
  return false;
};

console.log(circularArr([1, 2, -1, 2, 2]));
console.log(circularArr([2, 2, -1, 2]));
console.log(circularArr([2, 1, -1, 2]));
console.log(circularArr([1, -1, 5, 1, 4]));
