//task 1
let arr = [];
let arr2 = Array();
let arr3 = new Array();
console.log(arr, arr2, arr3);

//task 2
let array = ["vusala", "gunel", "sister", 20, 18];
console.log(array);

//task 3
console.log(array.length);

//task 4
console.log(array[0], array[2], array[array.length - 1]);

//task 5
let mixedDataTypes = ["aygun", "mom", 40, 13.7, true, undefined];
console.log(mixedDataTypes.length);

//task 6
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//task 7
console.log(itCompanies);

//task 8
console.log(itCompanies.length);

//task 9
console.log(
  itCompanies[0],
  itCompanies[3],
  itCompanies[itCompanies.length - 1]
);

//task 10
console.log(
  itCompanies[0],
  itCompanies[1],
  itCompanies[2],
  itCompanies[3],
  itCompanies[4],
  itCompanies[5],
  itCompanies[6]
);

//task 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//task 12
let sentence =
  itCompanies.slice(0, 6).join(", ") +
  " and " +
  itCompanies[itCompanies.length - 1] +
  " are big IT companies.";

console.log(sentence);

//task 13
let companyToCheck = "Amazon";
if (itCompanies.includes(companyToCheck)) {
  console.log(`${companyToCheck}`);
} else {
  console.log("a company is not found");
}

//task 14
let companiesWithOneO = [];

let company0 = itCompanies[0];
let countO0 = (company0.match(/o/gi) || []).length;
if (countO0 > 1) companiesWithOneO.push(company0);

let company1 = itCompanies[1];
let countO1 = (company1.match(/o/gi) || []).length;
if (countO1 > 1) companiesWithOneO.push(company1);

let company2 = itCompanies[2];
let countO2 = (company2.match(/o/gi) || []).length;
if (countO2 > 1) companiesWithOneO.push(company2);

let company3 = itCompanies[3];
let countO3 = (company3.match(/o/gi) || []).length;
if (countO3 > 1) companiesWithOneO.push(company3);

let company4 = itCompanies[4];
let countO4 = (company4.match(/o/gi) || []).length;
if (countO4 > 1) companiesWithOneO.push(company4);

let company5 = itCompanies[5];
let countO5 = (company5.match(/o/gi) || []).length;
if (countO5 > 1) companiesWithOneO.push(company5);

let company6 = itCompanies[6];
let countO6 = (company6.match(/o/gi) || []).length;
if (countO6 > 1) companiesWithOneO.push(company6);

console.log(companiesWithOneO);

// task 15
console.log(itCompanies.sort());

// task 16
console.log(itCompanies.reverse());

// task 17
console.log(itCompanies.slice(0, 3));

// task 18
console.log(itCompanies.slice(4, itCompanies.length));

// task 19
console.log(itCompanies.slice(2, 5));

// task 20
itCompanies.shift();
console.log(itCompanies);

// task 21
itCompanies.splice(2, 3);
console.log(itCompanies);

// task 22
itCompanies.pop();
console.log(itCompanies);

// task 23
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
