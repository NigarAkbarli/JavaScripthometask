const a3 = +prompt("Please, enter the value for A:");
const b3 = +prompt("Please, enter the value for b:");
let result = "";
if (a3 > b3) {
  result = a3 + b3;
} else if (a3 == b3) {
  result = a3 * b3;
} else if (a3 < b3) {
  result = a3 - b3;
}
console.log(result);