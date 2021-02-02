
//----------------------------------------------------------------
// class ( till ES5 version )
//----------------------------------------------------------------
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log(`im ${this.name}`);
// }
// Person.prototype.sayAge = function () {
//     console.log(`im ${this.age} yrs old`);
// }

//----------------------------------------------------------------
// class ( From ES6 version) - 2015
//----------------------------------------------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Person::constructor")
    }
    sayName() {
        console.log(`im ${this.name}`);
    }
    sayAge() {
        console.log(`im ${this.age} yrs old`);
    }
}
// const person = new Person("Nag", "37");


class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary;
        console.log("Employee :: constructor");
    }
    saySalary() {
        console.log("i wont");
    }
    askForBonus() {
        return this.salary * 0.02;
    }
}

// const emp = new Employee("Nag", 37, 1000.00)

class Boss extends Employee {
    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();
    }
}


// const boss = new Boss("Nag", 37, 1000.00)



//----------------------------------------------------------------
//----------------------------------------------------------------


class JavaScriptClass {
    name = "Anonymous";
    age = 0
    static staVar = 10;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    insMethod() {
        console.log("insMethod")
    }
    static staMethod() {
        console.log("staMethod")
    }
}

const obj = new JavaScriptClass("NAME", 10);


//----------------------------------------------------------------
