//task 1
let score = parseInt(prompt("Enter your score (0-100):"));
let grade;
if (score > 80 && score < 100) {
  grade = "A";
} else if (score > 70 && score < 89) {
  grade = "B";
} else if (score > 60 && score < 69) {
  grade = "C";
} else if (score > 50 && score < 59) {
  grade = "D";
} else if (score > 0 && score < 49) {
  grade = "F";
} else {
  grade = "Invalid score";
}
console.log(`Your score is ${score}. Your grade is ${grade}.`);

//task 2
let month = prompt("Enter a month:").toLowerCase();

let season;

if (month === "september" || month === "october" || month === "november") {
  season = "Autumn";
} else if (
  month === "december" ||
  month === "january" ||
  month === "february"
) {
  season = "Winter";
} else if (month === "march" || month === "april" || month === "may") {
  season = "Spring";
} else if (month === "june" || month === "july" || month === "august") {
  season = "Summer";
} else {
  season = "Invalid month";
}

console.log(
  `The season for ${
    month.charAt(0).toUpperCase() + month.slice(1)
  } is ${season}.`
);

//task 3
let day = prompt("What is the day today?").toLowerCase();

let message;

if (day === "saturday" || day === "sunday") {
    message = `${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`;
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    message = `${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`;
} else {
    message = "Invalid day"; 
}

console.log(message);

