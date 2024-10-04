let firstName = "vusala",
  lastName = "salimova",
  country = "Azerbaijan",
  city = "Sheki",
  age = 20,
  isMarried = false;
year = 2004;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof "10" === typeof 10);
console.log(parseInt("9.8") === 10);

let isNervous = true;
console.log(!!isNervous);
let myAge = 20;
console.log(!!myAge);
let car = "Dodge";
console.log(!!car);

let isHappy = false;
console.log(!!isHappy);
let animal = "";
console.log(!!animal);
let major;
console.log(!!major);

let py = "python".length;
let jg = "jargon".length;
console.log(py != jg);

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());
const secondsElapsed = Math.floor(Date.now() / 1000);
console.log(secondsElapsed);
