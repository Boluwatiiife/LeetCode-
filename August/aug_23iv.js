// 1854. Maximum Population Year

const maximumPopulation = function (logs) {
  logs.sort((a, b) => a[0] - b[0]);
  let dex = new Array(logs.length);

  for (let i = 0; i < logs.length; i++) {
    const [birth, death] = logs[i];
    const temp = [...logs.slice(0, i), ...logs.slice(i + 1, logs.length)];
    let count = 0;
    for (const [x, y] of temp) {
      if (x <= birth && y > birth) count++;
    }
    dex[i] = count;
  }
  return logs[dex.indexOf(Math.max(...dex))][0];
};

console.log(
  maximumPopulation([
    [1993, 1999],
    [2000, 2010],
  ])
);
console.log(
  maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ])
);
console.log(
  maximumPopulation([
    [1950, 1955],
    [1960, 1971],
    [1959, 1981],
  ])
);
console.log(
  maximumPopulation([
    [2033, 2034],
    [2039, 2047],
    [1998, 2042],
    [2047, 2048],
    [2025, 2029],
    [2005, 2044],
    [1990, 1992],
    [1952, 1956],
    [1984, 2014],
  ])
);
console.log(
  maximumPopulation([
    [1987, 2047],
    [1952, 2006],
    [2021, 2042],
    [2047, 2049],
    [2036, 2040],
    [1994, 2009],
  ])
);
console.log(
  maximumPopulation([
    [2025, 2041],
    [1988, 2007],
    [2003, 2046],
    [2045, 2049],
    [2025, 2027],
    [2014, 2040],
    [2014, 2027],
    [2011, 2027],
    [1972, 2019],
  ])
); // 2025
