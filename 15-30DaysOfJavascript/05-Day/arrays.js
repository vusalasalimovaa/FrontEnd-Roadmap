const arr = Array();
let arr2 = new Array();
let arr3 = [];

console.log(arr);
console.log(arr2);
console.log(arr3);

let array = ["Vusala", 20, 2004, "Salimova"];
array[0] = "Gunel";
array[1] = 18;
console.log(array);
console.log(array.length);

console.log("Vusala".split(""));

const fiveEmptyVlues = Array(5);
console.log(fiveEmptyVlues);

const eightXValues = Array(8).fill("Vusala");
console.log(eightXValues);

let firstList = [1, 2, 3];
let secondList = [4, 5, 6];
let thirdList = [7, 8, 9];
console.log(firstList.concat(secondList, thirdList, 10, 11, 12, [13, 14, 15]));

let names = ["vusala", "gunel", "vusala", "vasif", "aynur"];
console.log(names.indexOf("aynur"));
console.log(names.indexOf("aygun"));
console.log(names.lastIndexOf("vusala"));
console.log(names.includes("aynur"));
console.log(Array.isArray(names));
console.log(names.toString());
console.log(names.join(" & "));
console.log(names.slice(2, 5));
console.log(names.splice(2, 2, "aygun", "leyla"));
console.log(names);
console.log(names.push("xedice"));
console.log(names);
console.log(names.pop());
console.log(names);
console.log(names.shift());
console.log(names);
names.unshift("nazakat");
console.log(names);
console.log(names.reverse());
console.log(names.sort());

let numbers = [1, 2, 3, [4, 5, 6], 7, 8, 9];
console.log(numbers[3][2]);
