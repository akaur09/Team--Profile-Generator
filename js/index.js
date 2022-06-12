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
// call on html string
var htmlString = '';

function Projection(){
    // call on manager inquirer
    managerjs.inquireManager().then((managerString)=> {
        htmlString = htmlString + managerString;
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
            compileHtml();
            compileCss();
        }
    })
}