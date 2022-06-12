// require fs
const fs = require('fs');
// import inquirer
const inquirer = require('inquirer');
// add to employee.js
var EmployeeRank = require('./employee');

// create class Intern extentsion of employee
class Intern extends EmployeeRank {
    // create constructor
    constructor(name, id, email, school){
        super(name, id, email);
        // add school
        this.school = school;
        // add role
        this.role = "Intern"
    }
    // create funciton for school
    getSchool () {
        return `My school is ${this.school}`;
    }
    // create function for role
    getRole() {
        return `My role is ${this.role}`;
    }
}