// 1108. Defanging an IP Address

const defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));

// 2.
const defangIPadd = function (address) {
  return address
    .split("")
    .map((char) => (char === "." ? "[.]" : char))
    .join("");
};

console.log(defangIPadd("1.1.1.1"));
console.log(defangIPadd("255.100.50.0"));

// 3.
const defangIPad = function (address) {
  return address.replace(/[.]/g, "[.]");
};

console.log(defangIPad("1.1.1.1"));
console.log(defangIPad("255.100.50.0"));
