class Person {
    constructor (name,age,gender,interests){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    }

    hello() { //need to create a way to write the code so that it can take in as many interest as the user has
        return `Hello, my name is ${this.name}; my gender is ${this.gender}; I am ${this.age} years old; My interests are ${this.interests[0]}; ${this.interests[1]} and ${this.interests[2]}.`;

    }
};



let ryan = new Person('Ryan',30,'male',['being a hardarse','agile','ssd hard drives']);
let greeting = ryan.hello()
console.log(greeting)

module.exports = Person;