//scope.js
a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
b = 10; // this is a global scope variable and found in the window object
function letsLearnScopeee() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}

letsLearnScopeee();
console.log(a, b); // accessible

/////////////////////////////////////////////

let name = "Gunel";
let surname = "Ehmedzade";

function letsLearnScope() {
  console.log(name, surname);
  if (true) {
    let name = "Vusala";
    let surname = "Salimova";
    console.log(name, surname);
  }
  console.log(name, surname);
}

letsLearnScope();
console.log(name, surname);

//////////////////////////////////////////

{
  let car = "Dodge";
  console.log(car);
}

///////////////////////////////////////

let age = 20;
let lang = "Javascript";

function letsLearnScopes() {
  console.log(age, lang);
  let value = false;
  if (true) {
    lang = "Python";
    age = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(lang, age, c, value);
  }
  console.log(age, lang, value);
}

letsLearnScopes();
console.log(age, lang);

////////////////////////////////////////////

function scope() {
  var gravity = 9.81;
  console.log(gravity);
}

scope();
// console.log(gravity);

if (true) {
  var gravity = 9.81;
  console.log(gravity);
}

console.log(gravity);

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log("i", i);

////////////////////////////////////

function blockScope() {
  const pi = 3.14;
  console.log(pi);
}
// console.log(pi);
blockScope();

if (true) {
  const pi = 3.14;
  console.log(pi);
}

// console.log(pi);

for (let j = 0; j < 3; j++) {
  console.log(j);
}

// console.log("j", j);

//////////////////////////////////////////////////////
