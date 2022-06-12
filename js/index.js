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