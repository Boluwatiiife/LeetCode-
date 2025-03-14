// 2798. Number of Employees Who Met the Target

const numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (no of hours) {
    if (no >= target) {
      count++;
    }
  }
  return count;
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
