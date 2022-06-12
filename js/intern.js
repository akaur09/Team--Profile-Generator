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
// create function for inputting intern
function inquireIntern (){
    return inquirer.prompt([
        {
            // input name
            type:"input",
            message: "Enter INTERN name: ",
            name: "inputName",
            validate: (inputvalue) => {
                if (inputvalue) {
                    return true;
                } else {
                    console.log("Please enter a vaild name: ");
                    return false;
                }
            }
        },
        {
            // input id
            type:"input",
            message: "enter INTERN Id: ",
            validate: (inputvalue) => {
                if (inputvalue) {
                    return true;
                } else {
                    console.log("Please enter a vaild id: ");
                    return false;
                }
            }
        },
        {
            // input email
            type: "input",
            message: "Enter",
            validate: (inputvalue) => {
                if (inputvalue) {
                    return true;
                } else {
                    console.log("Please enter a vaild email: ");
                    return false;
                }
            }
        }
    ])
}