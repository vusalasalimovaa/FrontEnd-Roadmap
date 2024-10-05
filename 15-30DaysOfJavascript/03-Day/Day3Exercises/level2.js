let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area} `);

let a = Number(prompt("Enter side a:"));
let d = Number(prompt("Enter side b:"));
let c = Number(prompt("Enter side c:"));
let perimeter = a + d + c;
console.log(`The perimeter of the triangle is ${perimeter}`);

let width = prompt("Width?");
let length = prompt("Length?");
let areaOfRectangle = width * length;
console.log("The area of rectangle is", areaOfRectangle);

const pi = 3.14;
let radius = prompt("Radius?");
let areaOfCircle = pi * radius ** 2,
  circumference = 2 * pi * radius;
console.log(
  `The area of circle is ${areaOfCircle} and the circumference is circle is ${circumference}`
);

const slope = 2;
const b = -2;
const xIntercept = b === 0 ? 0 : b / -slope;
const yIntercept = b;
console.log(
  "Slope:",
  slope,
  "X-Intercept:",
  xIntercept,
  "Y-Intercept",
  yIntercept
);

const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const m = (y2 - y1) / (x2 - x1);
console.log("Slope:", m);

console.log(slope === m);
console.log(slope !== m);
console.log(slope > m);
console.log(slope >= m);
console.log(slope < m);
console.log(slope <= m);

let myName = "vusala";
console.log(myName.length > 7 ? "your name is long" : "your name is short");

let firsttName = "Asabeneh";
let lasttName = "Yetayeh";
if (firsttName > lasttName) {
  console.log(
    "Your first name, Asabeneh is longer than your family name, Yetayeh"
  );
} else if (firsttName < lasttName) {
  console.log(
    "Your last name, Yetayeh is longer than your first name, Yetayeh"
  );
} else {
  console.log(
    "Your first name, Asabeneh is equal to your family name, Yetayeh"
  );
}

let myAgee = 250;
let yourAge = 25;
let agaDifference = myAgee - yourAge;
console.log(`I am ${agaDifference} older than you`);

let birthYear = parseInt(prompt("Enter birth year:"));
const currentYear = new Date().getFullYear();
let agee = currentYear - birthYear;
if (agee >= 18) {
  console.log(`You are ${agee}. You are old enough to drive`);
} else {
  let yearsToWait = 18 - agee;
  console.log(
    `You are ${agee}. You will be allowed to drive after ${yearsToWait} years.`
  );
}

let years = parseInt(prompt("Enter the number of years:"));
let totalSeconds = years * 365 * 24 * 60 * 60; // 365 days, 24 hours, 60 minutes, 60 seconds
console.log(
  `If you live for ${years} years, you will live for approximately ${totalSeconds} seconds.`
);
