function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

function callMe() {
  console.log("I am callback function");
}

greet("Vusala", callMe);

//////////////////////////////

function cube(number, callback) {
  return number * callback(number);
}

const callbackFunc = (number) => number ** 2;

console.log(cube(3, callbackFunc));

//////////////////////////////////////

const a = (s1) => {
  const b = (s2) => {
    const c = (s3) => {
      return s1 + s2 + s3;
    };
    return c;
  };
  return b;
};

console.log(a(5)(12)(3));

//////////////////////////////

const arr = [1, 3, 5, 7];
let total = 0;
arr.forEach((number) => (total += number));
console.log(total);

////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];
const sumNumbers = (arr) => {
  let total = 0;
  const callbackk = function (element) {
    total += element;
  };
  arr.forEach(callbackk);
  return total;
};

console.log(sumNumbers(numbers));

/////////////////////////////////////////

const nums = [1, 4, 7, 9];
const sumNums = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};

console.log(sumNums(nums));

///////////////////////////////////////////

const evenNums = nums.filter((num) => num % 2 == 0);
console.log(evenNums);

/////////////////////////////////////////////

// function sayHello() {
//   console.log("Hi guys");
// }

// const clearInter = setInterval(sayHello, 1000);

/////////////////////////////////////////

// const timeout = setTimeout(() => {
//   clearInterval(clearInter);
//   console.log("Interval islemi sona catdi.");
// }, 7000);

/////////////////////////////////////////////

// setTimeout(() => {
//   clearTimeout(timeout);
//   console.log("Timeout islemi sona catdi...");
// }, 4000);

///////////////////////////////////////////////

// function sayAddress() {
//   console.log("Baku");
// }

// setTimeout(sayAddress, 3000);

///////////////////////////////////////

const array = ["Dodge", "Porsche", "Mercedes", "BMW"];
// array.forEach(function (element, index, array) {
//   console.log(element, index, array);
// });

// array.forEach((element,index,array) => {
//   console.log(element,index,array)
// })

array.forEach((element, index, arrs) => console.log(element, index, arrs));

///////////////////////////////////////////////

const oddNums = [1, 3, 5, 7, 9];
// oddNums.map((element, index, arr) => console.log(element, index, arr));
const oddNums2 = oddNums.map((element) => element * 2);
console.log(oddNums2);

///////////////////////////////////////

let users = [
  {
    id: 1,
    username: "Vusala",
    age: 20,
    gender: 2,
  },
  {
    id: 2,
    username: "Gunel",
    age: 18,
    gender: 2,
  },
  {
    id: 3,
    username: "Aynur",
    age: 38,
    gender: 2,
  },
  {
    id: 4,
    username: "Xalid",
    age: 50,
    gender: 1,
  },
];

let modifiedUsers = users.map((user) => {
  if (user.id === 3) {
    user.username = "Aygun";
  }
  return user;
});

console.log(modifiedUsers);

//////////////////////////////////////////

const women = users.filter((user) => user.gender === 2);
const men = users.filter((user) => user.gender === 1);
console.log(women);
console.log(men);
