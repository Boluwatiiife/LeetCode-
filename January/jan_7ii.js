// 1331. Rank Transform of an Array

/*
Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.
*/

const arrayRankTransform = function (arr) {
  let arrayy = arr;
  let uniquee = [...new Set(arrayy)];
  let answer = [];
  for (let i = 0; i < arrayy.length; i++) {
    answer.push(uniquee.filter((num) => num < arrayy[i]).length + 1);
  }
  return answer;
};

console.log(arrayRankTransform([40, 10, 20, 30]));
console.log(arrayRankTransform([100, 100, 100]));
console.log(arrayRankTransform([37, 12, 28, 8, 100, 56, 80, 5, 12]));
