let msg = "salam dunya";

function sayHello() {
  let msg = "hello word";
  console.log(msg);
}
sayHello();

/////////////////////////////////

function addTwoNumbers() {
  let a = 5;
  let b = 7;
  let sum = a + b;
  console.log(sum);
}
addTwoNumbers();

///////////////////////////////

function printFullName() {
  let name = "Vusala ";
  let surname = "Salimova";
  let fullName = name + surname;
  return fullName;
}
console.log(printFullName());
let fullName = printFullName();
console.log(fullName);

/////////////////////////////

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(3, 5));

///////////////////////////////

function sumArrayValues(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}
let arr = [2, 4, 6, 7];
console.log("The sum of array values", sumArrayValues(arr));

/////////////////////////////////

function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName("Vusala", "Salimova"));

/////////////////////////////

function total() {
  let cem = 0;
  for (let i = 0; i < arguments.length; i++) {
    cem += arguments[i];
  }
  return cem;
}

console.log("Cem:", total(2, 3, 4));

///////////////////////////////

function sumAllNums() {
  console.log(arguments);
}

sumAllNums(1, 2, 3, 4);

////////////////////////////

const sayHelloo = function () {
  console.log("Hello Azmiu");
};
sayHelloo();

/////////////////////////

const sayNumber = function (num) {
  let number = 4 + num;
  return number;
};

console.log(sayNumber(7));

//////////////////////////

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

anonymousFun();

///////////////////////////

(function () {
  console.log("Spiderman");
})();

////////////////////////

const myCar = (function (car) {
  console.log(`My fav car is ${car}`);
})("Dodge Challenger");

/////////////////////////

const arrowFunction = () => {
  // code block
};

const sqr = (n) => {
  return n * n;
};

const sqrr = (n) => n * n;

console.log(sqr(4));
console.log(sqrr(5));

////////////////////

const changeToUpperCase = (arr) => {
  newArr = [];
  for (const elements of arr) {
    newArr.push(elements.toUpperCase());
  }
  return newArr;
};
let cars = ["Dodge", "Mercedes", "Porsche", "Bmw"];
console.log(changeToUpperCase(cars));

/////////////////////////////////

const printFullNamee = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullNamee("Vusala", "Salimova"));

const printFullNameee = (firstName, lastName) =>
  console.log(`${firstName} ${lastName}`);
// console.log(printFullNameee("Xedice", "Memmedova"));
printFullNameee("Xedice", "Memmedova");

const printAge = (age) => `${age}`;
console.log(printAge(20));

///////////////////////////

function greetings(name = "Gunel") {
  let message = `${name} welcome to 30 days of JS challenge`;
  return message;
}
console.log(greetings());
console.log(greetings("Vusala"));

////////////////////////////////

const generateFullName = (name = "Aygun", lastName = "Salimova") => {
  let fullName = name + " " + lastName;
  return fullName;
};

console.log(generateFullName());
console.log(generateFullName("Arzu", "Zekeryeyeva"));

//////////////////////////////////

const toplama = (...numbers) => {
  console.log(numbers);
};
toplama(1, 2, 3, 4, 5);

//////////////////////

const sumAllNumss = (...nums) => {
  let sum = 0;
  for (const element of nums) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNumss(1, 2, 3));
