// 2073. Time Needed to Buy Tickets

const timeRequiredToBuy = function (tickets, k) {
  let time = 0;
  let i = 0;

  for (let i = 0; ; i++) {
    if (tickets[i] === 0) {
      tickets.splice(i, 1);
      i--;
    }
    tickets[i] = tickets[i] - 1;
    // return tickets;
    time++;
    // return time;
    if (tickets[i] === tickets[k] && tickets[i] === 0) break;
    if (i === tickets.length - 1) {
      i = 0;
    }
  }
  return time;
};

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
console.log(timeRequiredToBuy([4, 3, 2, 5], 3));
console.log(timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3));
