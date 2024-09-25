let numOne = 7;
let numTwo = 7;

console.log(numOne == numTwo);

let js = "Javascript";
let py = "Python";

console.log(js == py);

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff);

let nums = [1, "vusala", 7];

console.log(nums);

nums[1] = 2;
console.log(nums);

let nums1 = [1, 2, 3];
let nums2 = [1, 2, 3];

console.log(nums1 == nums2);

let user1 = {
  name: "Vusala",
  age: "20",
  profession: "PAM",
};

let user2 = {
  name: "Vusala",
  age: 20,
  profession: "PAM",
};

console.log(user1 == user2);

let numsOne = [1, 2, 3];
let numsTwo = numsOne;

console.log(numsOne == numsTwo);

let firstName = "vusala";
let lastName = "salimova";

let fullName = firstName + " " + lastName;
console.log(fullName);

let me = "vusala";
let age = 20;
let a = 13;
let b = 2;

let templateStrings = `${me} is ${age} and
she lives in Baku
but she was born    in Sheki
a + b = ${a + b}`;

console.log(templateStrings);

let forLongLiteralStrings =
  "hello \
30 days \
of js";

console.log(forLongLiteralStrings);

let paragraph = "vusala\nsalimova\n\from\nAZerbaijan";

console.log(paragraph);

let paragraph2 = "vusala\tsalimova";

console.log(paragraph2);

let paragraph3 = "vusa\\la";

console.log(paragraph3);

let paragraph4 = "Vusala's Dodge,";
let paragraph5 = 'Vusala"s Mercedes';

console.log(paragraph4, paragraph5);
