let result;
const x = +prompt("Please, enter the value for x:");
const y = +prompt("Please, enter the value for y:");
const radius = +prompt("Please, enter the value for r:");
if (x * x + y * y < radius * radius) {
  result = "The point lies inside the circle";
} else if (x * x + y * y == radius * radius) {
  result = "The point lies on the circle ";
} else {
  result = "The point lies outside the circle";
}
console.log(result);