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
        // ...validateNumbers(), // create a function to validate numbers and use here
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
                }
            )
            newEmployee.office = officeAnswer.office // without this line, the answer is not attached to newEmployee
        } else if (newEmployee.role === "Engineer") {
           const githubAnswer = await inquirer.prompt (
                {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub username?',
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
        console.info (newEmployee)
        console.info (employeeData)
    } 
    return employeeData;
}

function createMember (employeeData) {
    let memberDiv = `<!-- Team member -->
    <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="../dist/icons8-head-profile-64.png" alt="profile icon" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
            <h5 class="mb-0">${newEmployee.name}</h5><span class="small text-uppercase text-muted">${newEmployee.role}</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#"><i class="fa-solid fa-envelope"></i></a> ${newEmployee.email}</li>
                    <li class="list-inline-item"><a href="#"><i class="fa-solid fa-building"></i></a> ${newEmployee.office}</li>
                    <li class="list-inline-item"><a href="#"><i class="fa-brands fa-github"></i></a>${newEmployee.github}</li>
                    <li class="list-inline-item"><a href="#"><i class="fa-solid fa-graduation-cap"></i></a> ${newEmployee.school}</li>
                  </ul>
        </div>
    </div><!-- End -->`
    return memberDiv;
}

function createHTML(memberDiv) {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <!-- FontAwesome -->
    <script src="https://kit.fontawesome.com/53330a4c0d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../dist/styles.css">
        <title>Our FauxCo.de Team</title>
    </head>
    <body>
       
    <!-- START page header section -->
    <div class="container py-5">
        <div class="row text-center text-white">
            <div class="col-lg-8 mx-auto">
                <h1 class="display-4">Our FauxCo.de Team</h1>
                <p class="lead mb-0">Based on template <a href="https://bootstrapious.com/snippets" class="text-white">Boostrapious</a> page template and snippets.</p>
                </p>
            </div>
        </div>
    </div>
    <!-- END page header section -->
    ${memberDiv}
    <!-- START profile div -->
    <div class="container">
        <!-- START insert of teamMember div -->
        <div class="row text-center insertMember">
        </div><!-- END insert of teamMember div -->
    </div>
    <!-- END profile div -->
    
    <!-- Bootstrap JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </body>
    </html>`
}

async function displayData () {
    const employeeData = await askQs();
    console.info(employeeData)
    writeFileSync("./dist/index.html", "test")  // Create the index file and append the results with {flag: "a"}
}

displayData();