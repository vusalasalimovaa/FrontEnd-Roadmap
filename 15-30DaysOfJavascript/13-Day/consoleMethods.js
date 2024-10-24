console.log("30 days of javascript");

console.log("i am %s and i am %d and i was born in %d", "vusala", 20, 2004);

/////////////////////////////////////////////

console.log(
  "%cGUNEL AGILLI OL!!!! %cLove %cYou",
  "font-size:50px; color:pink; font-family: Poppins; text-shadow: 0 0 3px rgba(255,255,255,.5)",
  "color:red; font-size:50px; font-family:Arial",
  ""
);

//////////////////////////////////////

console.warn("This is a warning");

//////////////////////////////////

console.error("This is an error message");

///////////////////////////////////

let names = ["gunel", "aynur", "vusala", "aygun"];
console.table(names);

const user = {
  name: "Vusala",
  title: "Programmer",
  country: "Azerbaijan",
  city: "Baku",
  age: 20,
};
console.table(user);

////////////////////////////////////

const countries = [
  ["Azerbaijan", "Baku"],
  ["Spain", "Madrid"],
  ["Russia", "Moscow"],
];

console.time("Regular for loop");

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}

console.timeEnd("Regular for loop");

/////////////////////

console.time("for of loop");

for (const [country, capital] of countries) {
  console.log(country, capital);
}

console.timeEnd("for of loop");

////////////////////////

console.time("forEach loop");

countries.forEach(([name, capital]) => console.log(name, capital));

console.timeEnd("forEach loop");

//////////////////////

console.time("calculate array");

console.log(new Array(10e2).fill().map((value, index) => index));

console.timeEnd("calculate array");

/////////////////////////////

console.info("The 13th day of a challenge");

/////////////////////////////

console.assert(4 > 3, "4 is greater than 3");
console.assert(3 > 4, "3 is greater than 4");

//////////////////////////////

const namess = ["Asabeneh", "Brook", "David", "John"];
const countriess = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const userr = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(namess);
console.groupEnd();

console.group("Countries");
console.log(countriess);
console.groupEnd();

console.group("Users");
console.log(userr);
console.log(users);
console.groupEnd();

////////////////////////////////////

const test = () => {
  console.count("test called");
};

test();
test();
test();
test();

////////////////////////////////

console.clear();
