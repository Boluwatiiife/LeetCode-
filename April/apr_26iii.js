// 1423. Maximum Points You Can Obtain from Cards

const maxScore = function (cardPoints, k) {
  let total = cardPoints.reduce((a, b) => a + b, 0);
  let n = cardPoints.length;
  let dow = n - k;
  let sum = 0;
  for (let i = 0; i < dow; i++) sum += cardPoints[i];
  let left = 0;
  let maxx = 0;
  maxx = Math.max(maxx, total - sum);

  for (let right = dow; right < n; right++) {
    sum -= cardPoints[left];
    sum += cardPoints[right];
    left++;
    maxx = Math.max(maxx, total - sum);
  }

  return maxx;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
