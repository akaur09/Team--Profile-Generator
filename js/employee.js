// create an employee
class Employee{
    // add constructor for name, id and email
    constructor(name, id, email) {
        // assign id, name and email
        this.id = id;
        this.email = email;
        this.name = name;
        // assign role
        this.role = "Employee";
    }
    // create a function to get name
    getName(){
        return `This is ${this.name}`;
    }
    // create a function to get ID
    getId(){
        return `My employee ID is ${this.id}`;
    }
    // create function to get email
    getEmail() {
        return `My work email is ${this
        .email}`;
    }
    // create funciton to return role of worker
    getRole(){
        return `My role here is ${this.role}`;
    }
}

module.exports = Employee;