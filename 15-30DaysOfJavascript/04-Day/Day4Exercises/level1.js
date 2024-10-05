// exercise 3
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}
console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

//exercise 4
let number = Number(prompt("Enter a number:"));
if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
