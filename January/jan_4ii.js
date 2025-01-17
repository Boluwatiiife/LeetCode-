//  2558. Take Gifts From the Richest Pile

/*
You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

Choose the pile with the maximum number of gifts.
If there is more than one pile with the maximum number of gifts, choose any.
Reduce the number of gifts in the pile to the floor of the square root of the original number of gifts in the pile.
Return the number of gifts remaining after k seconds.
*/

const pickGifts = function (gifts, k) {
  let array = gifts;
  for (x = 0; x < k; x++) {
    largest_number = Math.max(...array);

    for (let i = 0; i < array.length; i++) {
      if (array[i] === largest_number) {
        array[i] = Math.floor(Math.sqrt(largest_number));
        break;
      }
    }
  }
  let final_answer = array.reduce((acc, curr) => acc + curr, 0);
  return final_answer;
};

console.log(pickGifts([25, 64, 9, 4, 100], 4));
console.log(pickGifts([1, 1, 1, 1], 4));
console.log(
  pickGifts(
    [
      54, 6, 34, 66, 63, 52, 39, 62, 46, 75, 28, 65, 18, 37, 18, 13, 33, 69, 19,
      40, 13, 10, 43, 61, 72,
    ],
    7
  )
);
console.log(
  pickGifts(
    [
      56, 41, 27, 71, 62, 57, 67, 34, 8, 71, 2, 12, 52, 1, 64, 43, 32, 42, 9,
      25, 73, 29, 31,
    ],
    52
  )
);
