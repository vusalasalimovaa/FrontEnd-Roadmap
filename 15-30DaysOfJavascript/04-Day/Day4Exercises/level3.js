//task 1
let monthhh = prompt("Enter a month:").toLowerCase(); 

let days;

if (monthhh === "january") {
    days = 31;
} else if (monthhh === "february") {
    days = 28; 
} else if (monthhh === "march") {
    days = 31;
} else if (monthhh === "april") {
    days = 30;
} else if (monthhh === "may") {
    days = 31;
} else if (monthhh === "june") {
    days = 30;
} else if (monthhh === "july") {
    days = 31;
} else if (monthhh === "august") {
    days = 31;
} else if (monthhh === "september") {
    days = 30;
} else if (monthhh === "october") {
    days = 31;
} else if (monthhh === "november") {
    days = 30;
} else if (monthhh === "december") {
    days = 31;
} else {
    days = null; 
}

if (days !== null) {
    console.log(`${monthhh.charAt(0).toUpperCase() + monthhh.slice(1)} has ${days} days.`);
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
} else if (monthh === "may") {
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
    console.log(`${monthh.charAt(0).toUpperCase() + monthh.slice(1)} ${year} has ${days} days.`);
} else {
    console.log("Invalid month. Please enter a valid month name.");
}
