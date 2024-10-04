let isRaining = true;
if (isRaining) {
  console.log("Stay at home.");
}

console.log(isRaining ? "Get your umbrella" : "Go out and have fun");

let result = parseInt(prompt("2 + 5 ?", "2+5"));
if (result === 7) {
  console.log("Congrats!");
} else {
  console.log("Wrong answer.Try again.");
}

console.log(result === 7 ? "true" : "false");

let num = 0;
if (num < 0) {
  console.log(`${num} is a negative nummber`);
} else if (num > 0) {
  console.log(`${num} is a postive number`);
} else if (num === 0) {
  console.log(`${num} is equal to 0`);
} else {
  console.log(`${num} is not a number`);
}

switch (result) {
  case 7:
    console.log("YOU GOT IT!!!!");
    break;
  case 25:
    console.log("Ooopss,wrong!!!");
    break;
  default:
    console.log("Try again pls");
}
