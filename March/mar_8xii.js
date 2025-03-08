// 2446. Determine if Two Events Have Conflict

const haveConflict = function (event1, event2) {
  let arr = [];

  for (let i = 0; i < 2; i++) {
    let xxx = event1[i].split(":");
    let yyy = event2[i].split(":");
    let temp = Number(xxx[0]) * 60 + Number(xxx[1]);
    let tempp = Number(yyy[0]) * 60 + Number(yyy[1]);
    arr.push(temp, tempp);
  }
  for (let i = arr[0]; i <= arr[2]; i++) {
    for (j = arr[1]; j <= arr[3]; j++) {
      if (i === j) {
        return true;
      }
    }
  }
  return false;
};

console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"]));
console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"]));
console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"]));
