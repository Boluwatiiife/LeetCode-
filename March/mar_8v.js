// 2409. Count Days Spent Together

const countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  let arr_alice = arriveAlice.split("-").map(Number);
  let leave_alice = leaveAlice.split("-").map(Number);
  let bob_arr = arriveBob.split("-").map(Number);
  let bob_leave = leaveBob.split("-").map(Number);
  let arr = [arr_alice, leave_alice, bob_arr, bob_leave];

  let months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

  let num = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    num.push(months[temp[0] - 1] + temp[1]);
  }

  let count = 0;
  for (let i = num[0]; i <= num[1]; i++) {
    for (let j = num[2]; j <= num[3]; j++) {
      if (i === j) {
        count++;
      }
    }
  }

  return count;
};

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31"));
console.log(countDaysTogether("01-20", "04-18", "01-01", "08-30"));
