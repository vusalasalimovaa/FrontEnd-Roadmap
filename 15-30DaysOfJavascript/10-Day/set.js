const cars = new Set([]);
console.log(cars);

////////////////////////

const countries = ["Spain", "Russia", "Azerbaijan", "Italy"];
const setOfCountries = new Set(countries);
setOfCountries.add("France");
setOfCountries.delete("Russia");
console.log(setOfCountries);
console.log(setOfCountries.size);
console.log(setOfCountries.has("Russia"));
// setOfCountries.clear();

for (const country of setOfCountries) {
  console.log(country);
}

setOfCountries.forEach((country) => console.log(country));
[...setOfCountries].map((country) => console.log(country));

//////////////////////////////////////

const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const setOfCompanies = new Set();
for (let company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);

/////////////////////////////////

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

counts = [];

for (const l of setOfLanguages) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang);
  counts.push({ language: l, count: filteredLang.length });
}
console.log(counts);

///////////////////////////////////

const a = [1, 2, 3, 4];
const b = [2, 3, 4, 5, 6, 7];
const c = [...a, ...b];
console.log(c);
console.log([...new Set(c)]);

//////////////////////////////////

const d = [2, 3, 4, 5];
const e = [3, 4, 5];

const E = new Set(e);
console.log(E);

let intersection = d.filter((d) => E.has(d));
console.log(intersection);
console.log(new Set(intersection));

/////////////////////////////////////

const num1 = [1, 2, 3, 4, 5];
const num2 = [3, 4, 5, 6, 7, 10];

const setOfNum1 = new Set(num1);
const setOfNum2 = new Set(num2);

let differenceNum1 = num1.filter((num1) => !setOfNum2.has(num1));
let differenceNum2 = num2.filter((num2) => !setOfNum1.has(num2));
console.log(differenceNum1);
console.log(differenceNum2);

///////////////////////////////////
