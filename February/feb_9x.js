// 1309. Decrypt String from Alphabet to Integer Mapping

const freqAlphabets = function (s) {
  const arr = s.split("");
  let mapp = [];
  for (let i = 0; i < arr.length; i++) {
    mapp.push(arr[i]);
    if (arr[i] === "#") {
      //   return mapp;
      mapp.pop();
      mapp.pop();
      mapp.pop();
      mapp.push(arr[i - 2] + arr[i - 1]);
    }
  }
  let resultt = [];
  for (let i = 0; i < mapp.length; i++) {
    if (mapp[i] === "1") {
      resultt.push("a");
    } else if (mapp[i] === "2") {
      resultt.push("b");
    } else if (mapp[i] === "3") {
      resultt.push("c");
    } else if (mapp[i] === "4") {
      resultt.push("d");
    } else if (mapp[i] === "5") {
      resultt.push("e");
    } else if (mapp[i] === "6") {
      resultt.push("f");
    } else if (mapp[i] === "7") {
      resultt.push("g");
    } else if (mapp[i] === "8") {
      resultt.push("h");
    } else if (mapp[i] === "9") {
      resultt.push("i");
    } else if (mapp[i] === "10") {
      resultt.push("j");
    } else if (mapp[i] === "11") {
      resultt.push("k");
    } else if (mapp[i] === "12") {
      resultt.push("l");
    } else if (mapp[i] === "13") {
      resultt.push("m");
    } else if (mapp[i] === "14") {
      resultt.push("n");
    } else if (mapp[i] === "15") {
      resultt.push("o");
    } else if (mapp[i] === "16") {
      resultt.push("p");
    } else if (mapp[i] === "17") {
      resultt.push("q");
    } else if (mapp[i] === "18") {
      resultt.push("r");
    } else if (mapp[i] === "19") {
      resultt.push("s");
    } else if (mapp[i] === "20") {
      resultt.push("t");
    } else if (mapp[i] === "21") {
      resultt.push("u");
    } else if (mapp[i] === "22") {
      resultt.push("v");
    } else if (mapp[i] === "23") {
      resultt.push("w");
    } else if (mapp[i] === "24") {
      resultt.push("x");
    } else if (mapp[i] === "25") {
      resultt.push("y");
    } else if (mapp[i] === "26") {
      resultt.push("z");
    }
  }
  return resultt.join("");
  return mapp;
  return arr;
};

console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));

// optimized solution

const alphabetttts = function (s) {
  let result = "";

  for (let i = s.length - 1; i >= 0; ) {
    if (s[i] === "#") {
      let num = parseInt(s.substring(i - 2, i));
      let xx = String.fromCharCode(96 + num);
      result = xx + result;
      i = i - 3;
    } else {
      let num = parseInt(s[i]);
      let xx = String.fromCharCode(96 + num);
      result = xx + result;
      i = i - 1;
    }
  }
  return result;
};

console.log(alphabetttts("10#11#12"));
console.log(alphabetttts("1326#"));
