console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(typeof "10" == typeof 10);
console.log(typeof parseInt("10") == typeof 10);
console.log(typeof Number("10") == typeof 10);
console.log(typeof +"10" == typeof 10);
console.log(parseFloat("9.8") == 10);
let word1 = "pyhthon",
  word2 = "jargon";
console.log(word1.includes("on"));
console.log(word2.includes("on"));
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51 + 50));
console.log(Math.floor(Math.random() * 256));
let word3 = "JavaScript";
let index = Math.floor(Math.random() * (word3.length - 1));
console.log(word3[index]);
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
let followingSentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(followingSentence.substr(31, 23));
