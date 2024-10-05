//task 1
let month = prompt("Enter a month:").toLowerCase(); 

let days;

if (month === "january") {
    days = 31;
} else if (month === "february") {
    days = 28; 
} else if (month === "march") {
    days = 31;
} else if (month === "april") {
    days = 30;
} else if (month === "may") {
    days = 31;
} else if (month === "june") {
    days = 30;
} else if (month === "july") {
    days = 31;
} else if (month === "august") {
    days = 31;
} else if (month === "september") {
    days = 30;
} else if (month === "october") {
    days = 31;
} else if (month === "november") {
    days = 30;
} else if (month === "december") {
    days = 31;
} else {
    days = null; 
}

if (days !== null) {
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has ${days} days.`);
} else {
    console.log("Invalid month. Please enter a valid month name.");
}

//task 3
let monthh = prompt("Enter a month:").toLowerCase(); 
let year = parseInt(prompt("Enter a year:")); 

let dayss;

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Determine the number of days in the month
if (monthh === "january") {
    days = 31;
} else if (monthh === "february") {
    if (isLeapYear) {
        days = 29; // Leap year
    } else {
        days = 28; // Non-leap year
    }
} else if (monthh === "march") {
    days = 31;
} else if (monthh === "april") {
    days = 30;
} else if (month === "may") {
    days = 31;
} else if (monthh === "june") {
    days = 30;
} else if (monthh === "july") {
    days = 31;
} else if (monthh === "august") {
    days = 31;
} else if (monthh === "september") {
    days = 30;
} else if (monthh === "october") {
    days = 31;
} else if (monthh === "november") {
    days = 30;
} else if (monthh === "december") {
    days = 31;
} else {
    days = null; 
}

if (days !== null) {
    console.log(`${monthh.charAt(0).toUpperCase() + month.slice(1)} ${year} has ${days} days.`);
} else {
    console.log("Invalid month. Please enter a valid month name.");
}
