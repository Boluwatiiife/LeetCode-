// 2423. Remove Letter To Equalize Frequency

const equalFrequency = function (word) {
  let arr = word.split("");

  for (let i = 0; i < arr.length; i++) {
    let chaa = arr[i];
    arr.splice(i, 1);
    let mapp = new Map();
    for (char of arr) {
      mapp.set(char, (mapp.get(char) || 0) + 1);
    }
    let temp = [...mapp.values()];
    let sett = new Set(temp);
    arr.splice(i, 0, chaa);

    if (sett.size === 1) {
      return true;
    }
  }

  return false;
};

console.log(equalFrequency("abcc"));
console.log(equalFrequency("aazz"));
console.log(equalFrequency("bacg"));
console.log(equalFrequency("ddaccb"));
console.log(equalFrequency("aaabbbcccdeeeddr"));
console.log(equalFrequency("bbac"));
console.log(equalFrequency("aca"));
console.log(equalFrequency("acaa"));
