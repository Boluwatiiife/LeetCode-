// 2073. Time Needed to Buy Tickets

const timeRequiredToBuy = function (tickets, k) {
  let ans = 0;
  let i = 0;

  while (tickets[k] > 0) {
    if (tickets[i] > 0) {
      tickets[i]--;
      ans++;
    }
    i++;
    if (i === tickets.length) i = 0;
  }
  return ans;
};

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
