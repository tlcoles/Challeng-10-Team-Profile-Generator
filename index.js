// Call inquirer CLI to prompt for information
const inquirer = require('inquirer');
const express = require('express');

// Use built-in read & write modules
const { readFileSync, writeFileSync } = require('fs')


// Call classes employee, engineer, intern, and manager
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

// Start asking questions
async function askQs() {
// Give first employee a number and use createEmployee to return value
var id = 0;
var officeNumber = 0;

// Create array of basic questions
const basicQs = [
    {
    type: 'input',
    name: 'fullname',
    message: 'What is their full name?',
    when: newEmployee,
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is their email address?',
    when: newEmployee,
    },
    {
    type: 'list',
    name: 'role',
    message: 'Use the up/down arrow to select their new position: ',
    choices: ['Intern', 'Engineer', 'Manager'],
    default: 'Intern',
    when: whichRole,
    when: newEmployee,
    },
]

const managerQ = 0    //! assign OfficeNumber as a numeric value

var newEmployee = true;
var employeeData = [];

function whichRole(role) {
  switch (role) {
    case 'Manager':
        var officeNumber = officeNumber++
        break;
    case 'Engineer':
        inquirer.prompt (
            {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
            }
        )
        break;
    case 'Intern':
        inquirer.prompt (
            {
            type: 'input',
            name: 'school',
            message: 'What university are they attending?',
            default: 'ESMT Berlin',
            }
        )
        break;
    default:
        console.info("Your selection is invalid")
        break;
}
}


while (newEmployee) {
    var id = id++
    const yesOrNo = await inquirer 
    .prompt (
        {
        type: 'confirm',
        name: 'createEmployee',
        message: 'Create new employee file?',
        default: true,
        }
    );
    if (yesOrNo.createEmployee === false) {
        break;
    }

    const newEmployee = await inquirer
    .prompt (basicQs)
    if (newEmployee.role === "Manager") {
        let officeNumber = officeNumber++
    } else if (newEmployee.role === "Engineer") {
        inquirer.prompt (
            {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
            when: newEmployee,
            }
        )
    } else { // defaults to Intern
        inquirer.prompt (
            {
            type: 'input',
            name: 'school',
            message: 'What university are they attending?',
            default: 'ESMT Berlin',
            when: newEmployee,
            }
        )
    }

    employeeData.push (
        {
        name: newEmployee.name,
        id: '${id}',
        email: newEmployee.email,
        role: newEmployee.role,
        office: '${officeNumber}',
        github: newEmployee.github,
        school: newEmployee.school,
        }
    )
}
}

askQs();





// Create the index file and append the results with flag:a 
// writeFileSync("./dist/index.html", {flag: "a"});




//! function createHTML(data){