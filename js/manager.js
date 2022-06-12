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
// create function to input mahanger info
function inquireManager(){
    return inquirer.prompt([
        {
            // create name
            type: "input",
            message: "enter MANAGER name: ",
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
            // create id
            type: "input",
            message: "Enter MANAGER Id: ",
            name: "inputId",
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
            // create email
            type: "input",
            message: "Enter MANAGER's email: ",
            name: "inputEmail",
            validate: (inputvalue) => {
                if (inputvalue) {
                    return true;
                } else {
                    console.log("Please enter a vaild email: ");
                    return false;
                }
            }
        },
    ])
}