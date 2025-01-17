//  1346. Check If N and Its Double Exist

/*  
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 */

const checkIfExist = function (arr) {
  for (let x = 0; x < arr.length; x++) {
    for (y = 0; y < arr.length; y++) {
      if (x !== y && arr[y] * 2 == arr[x]) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([6, 7, 8, 3]));
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
