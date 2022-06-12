// import fs
const fs = require('fs');
// import inquirer
const inquirer = require('inquirer');
// import js files for each role
const managerjs = require('./manager');
const employeejs = require('./employee');
const internjs = require('./intern');
const engineerjs = require('./engineer');
// require path
const path = require('path');
// call on HTML string
var HTMLString = '';

function Projection(){
    // call on manager inquirer
    managerjs.inquireManager().then((managerString)=> {
        HTMLString = HTMLString + managerString;
        addOrNot();
    });
}
// create a function if new members need to be added
function addOrNot(){
    inquirer.prompt([
        {
            type:"list",
            message: "Will you like to add another employee?",
            name: "YN",
            choices:["Yes", "No"],
        },
    ]).then((answer) => {
        if (answer.YN == "Yes") {
            addEmployee();
        } else {
            compileHTML();
            compileCss();
        }
    })
}
// create a function to add a new intern or engineer
function addEmployee(){
    inquirer.prompt([
        {
            type:"list",
            message:"Do you want to add an intern or an engineer?",
            name:"EI",
            choices:["Add Intern", "Add Engineer"],
        },
    ]).then((answer)=>{
        if (answer.EI == "Add Intern") {
            internjs.inquireIntern().then((internString) => { 
                HTMLString = HTMLString + internString;
                addOrNot();
            });
        } else if(answer.EI == "Add Engineer") {
            engineerjs.inquireEngineer().then((engineerString) =>{
                HTMLString = HTMLString + engineerString;
                addOrNot();
            });
        }
    });
}
// create an HTML with the complied HTMLs
function compileHTML() {
    var fullString = ``
}