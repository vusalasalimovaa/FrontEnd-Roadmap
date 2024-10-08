for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 6; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const countries = ["Azerbaijan", "Spain", "Switzerland", "Italy"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

const numbers = [1, 3, 5, 7, 9];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

let i = 0;
while (i < countries.length) {
  console.log(countries[i]);
  i++;
}

let a = 8;
do {
  console.log(countries[a]);
  a++;
} while (a < countries.length);

for (let country of countries) {
  console.log(country);
}

const cars = ["dodge", "porsche", "bmw", "mercedes", "ferrari", "mustang"];
for (let car of cars) {
  if (car === "bmw") {
    console.log(`${car} break the loop`);
    continue;
  }
  if (car === "ferrari") {
    console.log(`${car} is skipped in the loop`);
    break;
  }
  console.log(car);
}
