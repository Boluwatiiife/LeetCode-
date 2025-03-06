// 2299. Strong Password Checker II

const strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false;
  for (let i = 0; i < password.length; i++) {
    if (password[i + 1] === password[i]) return false;
  }

  let charac = "!@#$%^&*()-+";
  let lower = 0,
    upper = 0,
    digit = 0,
    charr = 0;
  let ccc = [];
  for (let temp of password) {
    ccc.push(temp);
    if (temp >= "A" && temp <= "Z") {
      upper++;
    } else if (temp >= "a" && temp <= "z") {
      lower++;
    } else if (charac.includes(temp)) {
      charr++;
    } else if (!isNaN(temp) && temp !== " ") {
      digit++;
    }
  }
  if (upper === 0 || lower === 0 || charr === 0 || digit === 0) return false;
  return true;
};

console.log(strongPasswordCheckerII("IloveLe3tc5ode!"));
console.log(strongPasswordCheckerII("IloveLe3tc5ode*#"));
console.log(strongPasswordCheckerII("Me+You--IsMyDream"));
console.log(strongPasswordCheckerII("1aB!"));
console.log(strongPasswordCheckerII("IloveLe3tc5ode"));
