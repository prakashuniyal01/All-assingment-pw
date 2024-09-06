function Employee(name, age, designation) {
    Person.call(this, name, age);
    this.designation = designation;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getDetails = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
};

// Usage:
const employee1 = new Employee("Jane", 30, "Software Engineer");
employee1.sayHello();
employee1.getDetails();
