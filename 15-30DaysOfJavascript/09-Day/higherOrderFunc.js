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

// const reduceMethod = nums.reduce((oldValue, currentValue) => {
//   return oldValue + currentValue;
// }, 0);

const reduceMethod = nums.reduce((acc, current) => acc + current, 0);

console.log(reduceMethod);

//////////////////////////////////////////////////////////

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
    id: 2,
    username: "Vusala",
    age: 20,
    gender: 2,
  },
  {
    id: 1,
    username: "Ayse",
    age: 18,
    gender: 2,
  },
  {
    id: 4,
    username: "Aynur",
    age: 38,
    gender: 2,
  },
  {
    id: 3,
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

const search = (keyword, array) =>
  array.filter((item) =>
    item.username.toLowerCase().includes(keyword.toLowerCase())
  );
// console.log(users.filter((user) => user.username.includes("ay")));
console.log(search("AY", users));

//////////////////////////////////////////////

console.log(users.every((user) => user.id === 1));
console.log(users.every((user) => typeof user.username === "string"));

//////////////////////////////////////////////////////

console.log(users.some((user) => user.id === 2));

///////////////////////////////////////////////

const currentUser = users.find((user) => user.id === 3);
const currentUser2 = users.findIndex((user) => user.id === 4);

console.log(currentUser);
console.log(currentUser2);

/////////////////////////////////////////////////

const names = ["Vusala", "Aygun", "Aynur", "Xedice", "Habiba", "Gunel"];
const numaralar = [1, 4, 7, 2, 3, 6, 9, 5, 13, 22, 12, 10, 20, 3.5, 4.8, 12.6];

// names.sort();
names.sort((a, b) => a.localeCompare(b));
names.sort((a, b) => b.localeCompare(a));

numaralar.sort((a, b) => a - b);
numaralar.sort((a, b) => b - a);

console.log(names);
console.log(numaralar);

////////////////////////////////////////////////////

// users.sort((a, b) => a.id - b.id);
users.sort((a, b) => b.id - a.id);
console.log(users);

// users.sort((a, b) => a.username.localeCompare(b.username));
// users.sort((a, b) => b.username.localeCompare(a.username));
// console.log(users);

// users.sort(function (a, b) {
//   if (a.username < b.username) return -1;
//   if (a.username > b.username) return 1;
//   return 0;
// });
// console.log(users);

////////////////////////////////////////////////

const isimler = [
  "Vusala",
  "Nuray",
  "Fidan",
  "Nazenin",
  "Vusala",
  "Aygun",
  "Nazenin",
  "Vusala",
];

const countedNames = isimler.reduce((acc, name) => {
  if (name in acc) {
    acc[name]++;
  } else {
    acc[name] = 1;
  }
  return acc;
}, {});

console.log(countedNames);

////////////////////////////////////////////////////

const items = [
  {
    name: "Apple",
    category: "Fruit",
  },
  {
    name: "Onion",
    category: "Vegetable",
  },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
];

let group = "category";
const sortedItems = items.reduce((acc, item) => {
  let key = item[group];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});

console.log(sortedItems);

// const groupBy = (array, property) => {
//   return array.reduce((acc, item) => {
//     let key = item[property];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(item);
//     return acc;
//   }, {});
// };

// console.log(groupBy(items, "category"));

///////////////////////////////////////////////

const posts = [
  {
    title: "Post 1",
    tags: ["css", "html"],
  },
  {
    title: "Post 2",
    tags: ["js", "html"],
  },
  {
    title: "Post 3",
    tags: ["sql", "python"],
  },
  {
    title: "Post 3",
    tags: ["node js", "python"],
  },
];

const allTags = posts.reduce((acc, post) => [...acc, ...post.tags], []);

const noDublicatedTags = allTags.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(noDublicatedTags);

console.log([...new Set(allTags)]);

// const saylar = [1, 2, 3, 4, 4, 4, 6, 8, 2, 3, 8, 6];
// const array2 = saylar.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(array2);
