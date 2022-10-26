let root1, root2;
const a4 = +prompt("Please, enter the value for A:");
const b4 = +prompt("Please, enter the value for B:");
const c4 = +prompt("Please, enter the value for C:");
const discriminant = b4 * b4 - 4 * a4 * c4;

if (discriminant > 0) {
  root1 = (-b4 + Math.sqrt(discriminant)) / (2 * a4);
  root2 = (-b4 - Math.sqrt(discriminant)) / (2 * a4);
} else if (discriminant == 0) {
  root1 = (-b4 + Math.sqrt(discriminant)) / (2 * a4);
  root2 = root1;
} else {
  root1 = root2 = `Roots are not real number`;
}

console.log(`The 1st solution of equation:${root1}`);
console.log(`The 2nd solution of equation:${root2}`);