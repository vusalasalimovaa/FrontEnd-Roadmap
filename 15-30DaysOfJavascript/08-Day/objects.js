const person = {
  firstName: "Vusala",
  lastName: "Salimova",
  age: 20,
  country: "Azerbaijan",
  city: "Sheki",
  skills: ["HTML", "CSS", "JS", "REACT"],
  isMarried: false,
  "phone number": 8721616,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getAdress: () => `${person.country} and ${person.city}`,
};

// Object.freeze(person);
// Object.seal(person)

person.nationality = "The Azerbaijanian";
person.title = "Developer";
person.skills.push("SQL");
person.skills.push("Sass");
person.city = "Baku";

let keyName = "skills";

console.log(person.isMarried);
console.log(person.skills);
console.log(person["phone number"]);
console.log(person["country"]);
console.log(person.getFullName());
console.log(person.getAdress());
console.log(person[keyName]);
console.log(person);

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

person.getPersonInfo = function () {
  // let skillsWithoutLastSkill = this.skills
  //   .splice(0, this.skills.length - 1)
  //   .join(", ");
  // console.log(skillsWithoutLastSkill);
  // let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = formatter.format(this.skills);
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nShe lives in ${this.country}.\nShe teaches ${skills}.`;
  return statement;
};

console.log(person.getPersonInfo());

// let newPerson = person;

// console.log(person);

// newPerson.firstName = "Gunel";

// console.log(person);

let newPerson = Object.assign({}, person);
// let newPerson = {...person}

console.log(person);

newPerson.firstName = "Gunel";

console.log(newPerson);

////////////////////////////////

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for (let [key, value] of Object.entries(person)) {
  console.log(`key- ${key}, value- ${value}`);
}

console.log(person.hasOwnProperty("car"));
console.log(person.hasOwnProperty("city"));

console.log(person);
