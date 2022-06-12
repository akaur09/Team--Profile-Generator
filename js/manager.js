// require fs
const fs = require('fs');
// require inquirer
const inquirer = require('inquirer');
// call on employee
var EmployeeRank = require('./employee');

// create manager class to extend employee
class Manager extends EmployeeRank {
    // create constructor
    constructor(name, id, email){
        super(name, email, id);
        // add office number
        this.officeNumber = officeNumber;
        // add role
        this.role = "Manager";
    }
    getofficeNumber(){
        return `my office number is ${this.officeNumber}`;
    }
    getRole(){
        return ` my role is ${this.role}`;
    }
}