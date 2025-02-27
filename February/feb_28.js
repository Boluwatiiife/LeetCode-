// 2037. Minimum Number of Moves to Seat Everyone

const minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < seats.length; i++) {
    let temp = Math.abs(students[i] - seats[i]);
    count += temp;
  }

  return count;
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]));
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]));
