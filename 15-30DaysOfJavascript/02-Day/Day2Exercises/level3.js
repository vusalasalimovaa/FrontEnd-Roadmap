let quote =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let count = quote.match(/love/gi);
console.log(count.length);

let longSentence =
  "You cannot end a sentence with because because because is a conjunction";
let count2 = longSentence.match(/because/gi);
console.log(count2.length);

const sentence2 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleanedText = sentence2.replace(/[^\w\s]/g, "").replace(/\s+/g, " ");
console.log(cleanedText);

let followingText =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let nums = /\d+/g;
console.log(followingText.match(nums));
