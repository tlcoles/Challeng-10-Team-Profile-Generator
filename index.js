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
const { info } = require('console');

// Start asking questions
async function askQs() {
    // Give first employee a number and use createEmployee to return value
    var id = 0;
    var officeNumber = 0;

    // Create array of basic questions
    const basicQs = [
        {
        type: 'input',
        name: 'name',
        message: 'What is their full name?',
        when: enteringData,
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID number?',
        when: enteringData,
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        when: enteringData,
        },
        {
        type: 'list',
        name: 'role',
        message: 'Use the up/down arrow to select their new position: ',
        choices: ['Intern', 'Engineer', 'Manager'],
        default: 'Intern',
        when: enteringData,
        },
    ]

    var enteringData = true;
    var employeeData = [];

    while (enteringData) {
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
            const officeAnswer = await inquirer.prompt (
                {
                type: 'input',
                name: 'office',
                message: 'What is their office number?',
                // when: newEmployee,
                }
            )
            newEmployee.office = officeAnswer.office // without this line, the answer is not attached to newEmployee
        } else if (newEmployee.role === "Engineer") {
           const githubAnswer = await inquirer.prompt (
                {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub username?',
                // when: newEmployee,
                }
            )
            newEmployee.github = githubAnswer.github
        } else { // defaults to Intern
            const schoolAnswer = await inquirer.prompt (
                {
                type: 'input',
                name: 'school',
                message: 'What university are they attending?',
                default: 'ESMT Berlin',
                // when: newEmployee,
                }
            )
            newEmployee.school = schoolAnswer.school
        }

        employeeData.push (
            {
            name: newEmployee.name,
            id: newEmployee.id,
            email: newEmployee.email,
            role: newEmployee.role,
            office: newEmployee.office,
            github: newEmployee.github,
            school: newEmployee.school,
            }
        )
        console.info ("We expect this to display after the prompts")
        console.info (newEmployee)
        console.info (employeeData)
    } 
    return employeeData;
}

function createHTML (employeeData) {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <title>Our FauxCo.de Team</title>
    </head>
    <body>
        <p>${JSON.stringify(employeeData)}</p>
        <!-- Bootstrap JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>`
    
    return html;

}

async function displayData () {
    const employeeData = await askQs();
    console.info(employeeData)
    writeFileSync("./dist/index.html", createHTML(employeeData));  // Create the index file and append , {flag: "a"} the results with flag:a 
}

displayData();