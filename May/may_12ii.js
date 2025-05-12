// circular Array

const circularArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let slow = i,
      fast = i;

    const isForward = arr[i] > 0;

    while (true) {
      // move pointers forwards
      // slow pointer moves 1 forward
      // fast pointer moves 2 forward
      slow = findNextIndex(arr, isForward, slow);
      fast = findNextIndex(arr, isForward, fast);
      if (fast !== -1) {
        fast = findNextIndex(arr, isForward, fast);
      }
      if (slow === -1 || fast === -1 || fast === slow) break;
    }
    if (fast !== -1 && slow !== -1 && slow === fast) return true;
  }
  return false;
};

function findNextIndex(arr, isForward, currIndex) {
  const currIsFoward = arr[currIndex] > 0;
  // if the next direction is diffrent from the current direction
  if (currIsFoward !== isForward) {
    return -1;
  }
  const nextIndex = (currIndex + arr[currIndex]) % arr.length;
  if (nextIndex < 0) nextIndex += arr.length;
  // if we didnt move anywhere
  if (nextIndex === currIndex) return -1;
  return nextIndex;
}

console.log(circularArr([1, 2, -1, 2, 2])); //true
console.log(circularArr([2, 2, -1, 2])); //true
console.log(circularArr([2, 1, -1, 2])); //false
