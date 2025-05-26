// 2410. Maximum Matching of Players With Trainers

const matchPlayersAndTrainers = function (players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  let countt = 0;
  let i = 0,
    j = 0;

  while (i < players.length && j < trainers.length) {
    if (players[i] <= trainers[j]) {
      countt++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return countt;
};

console.log(matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8]));
console.log(matchPlayersAndTrainers([1, 1, 1], [10]));
