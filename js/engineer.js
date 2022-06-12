// import fs
const fs = require('fs');
// import inquirer
const inquirer = require('inquirer');
// call on employee.js
var EmployeeRank = require('./employee');

// create engineer class which is an extentsion of employee.js
class Engineer extends EmployeeRank {
    // add constructor to create name, id, email and github
    constructor (name, id, email, gitUsername){
        super(name, id, email);
        this.gitUsername = gitUsername;
        // create role
        this.role = "Engineer";
    }
    // create function to get github
    getGithub(){
        return ` My github username is ${this.gitUsername}`;
    }
    // create function for role
    getRole (){
        return `My role is ${this.role}`;
    }
}

// create a function to input engineer
function inquireEngineer () {
    // create prompt using inquier
    return inquirer.prompt([
        {
            // create form to add engineer's name
            type: "input",
            message: "input ENGINEER'S name: ",
            name: "inputName",
            // validate answer
            validate: (inputvalue) => {
                if (inputvalue) {
                    return true;
                } else {
                    console.log("Please enter a vaild name");
                    return false;
                }
            }
        },
        
    ])
}