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
                    console.log("Please enter a vaild name: ");
                    return false;
                }
            }
        },
        {
            // create form for id
            type: "input",
            message: "enter ENGINEER'S Id",
            name: "inputId",
            // validate answer
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
            // create form for email
            type: "input",
            message: "enter ENGINEER's email",
            name: "inputEmail",
            // validate answer
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
            // create form for github 
            type:"input",
            message: "enter ENGINEER's github username: ",
            name: "inputGithub",
            // validate answer
            validate: (inputvalue) => {
                if (inputvalue) {
                    return true;
                } else {
                    console.log("Please enter a vaild username: ");
                    return false;
                }
            }
        }
        // add engineer
    ]) .then(answers => {
        const newEngineer = new Engineer(answers.inputName, answers.inputId, answers.inputEmail, answers.inputGihub);
        return EngineerHTML(newEngineer);
    })
}
// create a function to generate engineer html
function EngineerHTML(data) {
    var EngineerString = 
    `
    <div>
        <div> ${data.role} </div>
        <div>
            <h4> ${data.name} </h4>
            <p> ${data.id} </p>
            <p> Email: <a href = "mailto:${data.email}"> ${data.email} </a></p>
            <p> Github username: <a href = "https://github.com/${data.gitUsername}/" target= "_blank"> Github </a></p>
        </div>
    </div>
    `
    return EngineerString;
}

module.exports = {inquireEngineer, Engineer};