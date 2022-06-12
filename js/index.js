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
    var fullString = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <scriptsrc="https://kit.fontawesome.com/30f3a925af.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>Team Member Generator</title>
    </head>
    <body>
        <main>
            <div class="heading">
                <h1> Team Members</h1>
            </div>
            <div id="flexThis">
                ${HTMLString}
            </div>
        </main>
        <script src="./js/index.js"></script>
    </body>
    </html>
    `;
}