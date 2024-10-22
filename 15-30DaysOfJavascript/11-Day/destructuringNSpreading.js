const numbers = [1, 3, 5, 7];
const [num1, num2, num3] = numbers;
const [, , number3] = numbers;
console.log(num1, num2, num3);
console.log(number3);

//////////////////////////////

const stack = [
  ["HTML", "CSS", ["Javascript", "React", "Svelte"]],
  ["PYTHON", "NODEJS", "SQL"],
];

// const [frontend, backend] = stack;
// console.log(frontend);
// console.log(backend);

const [[firstlang, secondlang, [firstLangOfThirdLang]], backend] = stack;
console.log(firstlang);
console.log(secondlang);
console.log(firstLangOfThirdLang);

//////////////////////////////////

const names = ["Vusala", "Gunel", undefined];

const [
  firstPerson,
  secondPerson,
  thirdPerson = "Aygun",
  fourthPerson = "Aynur",
] = names;

console.log(thirdPerson);
console.log(fourthPerson);

//////////////////////////////////

const cars = ["dodge", "mercedes", "porsche", "camaro", "bugatti", "ferrari"];

const [myCar, myDadsCar, myFriendsCar, ...otherCars] = cars;
console.log(myCar);
console.log(myDadsCar);
console.log(myFriendsCar);
console.log(otherCars);

//////////////////////////////////////////

const countries = [
  ["Azerbaijan", "Baku"],
  ["Turkey", "Ankara"],
  ["Spain", "Madrid"],
];

for (const [country, capital] of countries) {
  // console.log(`Country: ${country[0]} , Capital: ${country[1]}`)
  console.log(country, capital);
}

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}

////////////////////////////////////////////

const user = {
  name: "Vusala",
  surname: "Salimova",
  age: 20,
  pets: {
    cat: ["Gunka"],
    dog: ["GUNEL"],
  },
  //   major: "IT",
};

const { name } = user;
console.log(name);
const {
  pets: { cat },
} = user;
console.log(cat);
const { surname: secondName, major = "PAM" } = user;
console.log(secondName);
console.log(major);

//////////////////////////////////////////////////////

function multiply([num1, num2]) {
  return num1 * num2;
}

const nums = [3, 5];

console.log(multiply(nums));

///////////////////////////////////////////////

const user1 = {
  name: "Vusala",
  surname: "Salimova",
  age: 20,
  pets: {
    cat: ["Gunka"],
    dog: ["GUNEL"],
  },
  skills: ["Html", "Css", "SQL", "JS"],
  hobbies: ["bicycle", "reading"],
};

function getUserInfo({
  name,
  surname,
  age,
  pets: { cat, dog },
  skills: [skill1, ...otherSkills],
  ...others
}) {
  console.log("OTHERS", others);
  console.log(skill1);
  console.log(otherSkills);
  return `My name is ${name} and my surname is ${surname}. I am ${age}. I have ${cat.length} cat and ${dog.length} dog`;
}

console.log(getUserInfo(user1));

//////////////////////////////////////////////////////////

const numb = [1, 3, 4];

const numb2 = [...numb];

console.log(numb);

numb2.push(10);
// numb.push(5);

console.log(numb);
console.log(numb2);

////////////////////////////////////

const person = {
  name: "Vasif",
  surname: "Salimov",
};

// person.name = "Xalid";
console.log(person);
const person2 = { ...person, name: "Vahid" };
// const person2 = Object.assign({}, person);
// person2.name = "Vahid";
console.log(person);
console.log(person2);

/////////////////////////////////////////////

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);
