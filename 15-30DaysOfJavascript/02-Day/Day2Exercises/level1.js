let challenge = " 30 Days Of JavaScript ";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3, challenge.length));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log(challenge.split(""));
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let challengeSentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(challengeSentence.indexOf("because"));
console.log(challengeSentence.lastIndexOf("because"));
console.log(challengeSentence.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith(" 30"));
console.log(challenge.endsWith("ipt "));
console.log(challenge.match(/a/g));
console.log(challenge.match("a"));
let word = "30 Days Of ";
console.log(word.concat("Javascript"));
console.log(challenge.repeat(2));
