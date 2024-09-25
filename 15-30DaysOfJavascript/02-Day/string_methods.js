let country = "Spain";
console.log(country.length);

let string = "Javascript";
console.log(string[2]);
console.log(string[string.length - 1]);

let text = "Hello,World!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());

let youtube = "nightshow";
console.log(youtube.substr(5, 4));

let city = "Sheki";
console.log(city.substring(3, 5));

let sentence = "30 Days of Javascript";
console.log(sentence.split());
console.log(sentence.split(" "));
console.log(sentence.split(""));
let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split(","));
console.log(countries.split(", "));

let string2 = "   30 Days Of JavaScript   ";
console.log(string2.trim(" "));
let nickname = " Vusala ";
console.log(firstName.trim());

let university = "Azerbaijan Architecture and Construction University";
console.log(university.includes("az"));
console.log(university.includes("University"));

let surname = "Salimova";
console.log(surname.replace("ova", "li"));

let subject = "English";
console.log(subject.charAt(6));
console.log(subject.charCodeAt(6));

let expression = "I am studying in Azmiu";
console.log(expression.indexOf("am"));
console.log(expression.indexOf("a"));
console.log(expression.indexOf("azmiu"));

let myAttitude =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(myAttitude.lastIndexOf("JavaScript"));

let word = "Vusala ";
console.log(word.concat("salimova"));

let txt = "Sheki";
console.log(txt.startsWith("sh"));
console.log(txt.startsWith("She"));

let romanticsm = "Love is the most powerful feeling in the world";
console.log(romanticsm.endsWith("in the world"));
console.log(romanticsm.endsWith("world"));
console.log(romanticsm.endsWith("Love"));

let myOpinion =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(myOpinion.search("love"));
console.log(myOpinion.search(/javascript/gi));

let sentence2 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(sentence2.match("love"));
let pattern = /love/gi;
console.log(sentence2.match(pattern));
let txt2 =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;
console.log(txt2.match(regEx));
console.log(txt2.match(/\d+/g));

let teacherName = "Vusala";
console.log(teacherName.repeat(5));
