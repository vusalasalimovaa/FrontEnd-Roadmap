let pattern = "love";
let flag = "gi";
let regEx = new RegExp(pattern, flag);
let regex = new RegExp("love", "gi");
let withoutRegExConstructor = /love/gi;

//////////////////////////////

let word = /fuck/i;
let comment = "fUCK you";

console.log(word.test(comment));

//////////////////////////////

let str = "I   LoVe javascript and i also LOVE you";
console.log(str.match(/love/gi));
console.log(str.search(/love/gi));

//////////////////////////////

const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

console.log(txt.replace(/python/gi, "Javascript"));
console.log(txt.replace(/Python|python/g, "JS"));
console.log(txt.replace(/(P|p)ython/g, "Js"));

//////////////////////////////

const text =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

console.log(text.replaceAll("%", ""));
console.log(text.replace(/%/g, ""));

/////////////////////////////

let string = "i am 20 years old and i was born in 2004";
console.log(string.match(/[0-9]/g));
console.log(string.match(/\d/g));
console.log(string.match(/\D/g));
console.log(string.match(/\d+/g));
console.log(string.match(/\b\d{2,4}\b/g));

/////////////////////////////////////

let username = "1vus ala";
console.log(/^[a-z0-9 ]+$/.test(username));
let name2 = "gunel";
console.log(/^[^0-9]+$/.test(name2));

//////////////////////////////////

let name = "tayfun";
console.log(/[u|a]n$/.test(name));
console.log(/a?n$/.test(name));

/////////////////////////////////

let date = "23-10-2024";

let match = date.match(/(?<day>\d+)-(?<month>\d+)-(?<year>\d+)/);

console.log(match.groups);
