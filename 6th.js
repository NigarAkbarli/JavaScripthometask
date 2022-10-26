let n = prompt("Please, enter the value for n:");
let num1, num2;
let r = n % 10;
let num = n-r;
if (n == 10) {
  num1 = `ten`;
  num2 = ` `;
} else if (n == 11) {
  num1 = `eleven`;
  num2 = ` `;
} else if (n == 12) {
  num1 = `twelve`;
  num2 = ` `;
} else if (n == 13) {
  num1 = `thirteen`;
  num2 = ` `;
} else if (n == 14) {
  num1 = `fourteen`;
  num2 = ` `;
} else if (n == 15) {
  num1 = `fifteen`;
  num2 = ` `;
} else if (n == 16) {
  num1 = `sixteen`;
  num2 = ` `;
} else if (n == 17) {
  num1 = `seventeen`;
  num2 = ` `;
} else if (n == 18) {
  num1 = `eighteen`;
  num2 = ` `;
} else if (n == 19) {
  num1 = `nineteen`;
  num2 = ``;
} else {
  if (num == 20) {
    num1 = `twenty`;
    num2 = ` `;
  } else if (num == 30) {
    num1 = `thirty`;
    num2 = ` `;
  } else if (num == 40) {
    num1 = `forty`;
    num2 = ` `;
  } else if (num == 50) {
    num1 = `fifty`;
    num2 = ` `;
  } else if (num == 60) {
    num1 = `sixty`;
    num2 = ` `;
  } else if (num == 70) {
    num1 = `seventy`;
    num2 = ` `;
  } else if (num == 80) {
    num1 = `eighty`;
    num2 = ` `;
  } else if (num == 90) {
    num1 = `ninety`;
    num2 = ` `;
  }
  if (r == 1) {
    num2 = `one`;
  } else if (r == 2) {
    num2 = `two`;
  } else if (r == 3) {
    num2 = `three`;
  } else if (r == 4) {
    num2 = `four`;
  } else if (r == 5) {
    num2 = `five`;
  } else if (r == 6) {
    num2 = `six`;
  } else if (r == 7) {
    num2 = `seven`;
  } else if (r == 8) {
    num2 = `eight`;
  } else if (r == 9) {
    num2 = `nine`;
  }
}
console.log(`${num1} ${num2}`);