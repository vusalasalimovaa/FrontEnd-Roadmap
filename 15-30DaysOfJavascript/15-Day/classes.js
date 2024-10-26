class Person {
    constructor(firstName, lastName,age,country="Azerbijan",city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city  = city
        this.skills = []
    }
    getFullName() {
        return this.firstName + " " + this.lastName
    }

    get getSkills() {
        return this.skills
    }

    set setSkill(skill){
        this.skills.push(skill)
    }

    appendSkill(skill) {
        this.skills.push(skill)
    }

    getPersonalInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 ? `My skills: ${this.skills.join(", ")}` : ''
        return `My name is ${fullName}, i am ${this.age}. I am from ${this.country} and i live in ${this.city}. ${skills}`
    }

    static getDate() {
        return new Date()
    }

    static getVersion() {
        return `1.0.2`
    }
}

class Teacher extends Person{
    constructor(firstName, lastName,age,country,city,gender){
        super(firstName, lastName,age,country,city)
        this.gender = gender
    }
    teach(){
        return `teaching programming language...`
    }

    get getGender(){
        return this.gender === 1 ? "Male" : "Female"
    }

    getFullName(){
        return super.getFullName() + " (" + this.getGender + ")"
    }
}

class Student extends Person{
    learn(){
        return `learning programming language...`
    }
}

const person = new Person("Vusala","Salimova",20,"Azerbaijan","Sheki")
const person2 = new Person("Gunel","Ahmedzade",18,"Azerbaijan","Lenkaran")
const person3 = new Person("Fidan","Memmedova",20,undefined,"Baku")
console.log(person.getFullName(),person2.getFullName(),person3.getFullName());
console.log(person.getSkills);

person2.setSkill = "javascript"
person2.appendSkill("html and css")

console.log(person,person2,person3);

console.log(person.getPersonalInfo());
console.log(person2.getPersonalInfo());
console.log(person3.getPersonalInfo());
console.log(Person.getDate());
console.log(Person.getVersion());

const teacher1 = new Teacher("Qurban","Qurbanzade",30,"Azerbaijan","Baku",1)
const student1 = new Student("Shahnaz","Rustamli",20,"Azerbaijan","Sirvan",2)
console.log(Teacher.getVersion());
console.log(teacher1.getFullName());

teacher1.setSkill = "kotlin"
teacher1.setSkill = "react"

console.log(teacher1);
console.log(teacher1.getGender);
console.log(teacher1.getFullName());