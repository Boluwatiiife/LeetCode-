// 1700. Number of Students Unable to Eat Lunch

const countStudents = function (students, sandwiches) {
  let count = students.length;
  let temp = 0;

  while (true) {
    if (students[0] === sandwiches[0]) {
      count--;
      students.shift();
      sandwiches.shift();
      temp = 0;
    } else {
      const back = students[0];
      students.shift();
      students.push(back);
      temp++;
    }
    if (temp > students.length || count === 0) break;
  }
  return count;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
