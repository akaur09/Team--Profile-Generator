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
            // input email
            type: "input",
            message: "Enter",
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
        {
            // input school
            type: "input",
            message: "Enter INTERN's school name",
            name: "inputSchool",
            validate: (inputvalue) => {
                if (inputvalue) {
                    return true;
                } else {
                    console.log("Please enter a vaild school: ");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const newIntern = new Intern(answers.inputName, answers.inputId, answers.inputEmail, answers.inputSchool);
        return InternHTML(newIntern);
    })
}
// create funciton to generate intern html
function InternHTML(data) {
    var internString= `
    <div>
        <div> ${data.role} </div>
        <div>
            <h4> ${data.name} </h4>
            <p> ${data.id} </p>
            <p> Email: <a href = "mailto:${data.email}"> ${data.email} </a></p>
            <p> School: ${data.school} </p>
        </div>
    </div>
    `
    return internString;
}
module.exports = (inquireIntern, Intern);