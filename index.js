// Call inquirer CLI to prompt for information
const inquirer = require('inquirer');
const express = require('express');

// Call classes employee, engineer, intern, and manager
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const switchQuestion = [
    {
        name: 'role',
        type: 'list',
        message: 'Create a new position or quit?: ',
        choices: ['Manager', 'Engineer', 'Intern', 'Quit']
    }
  ]

let inProgress = true;

const init = () => {
    inquirer
    .prompt(switchQuestion)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
    //! askQuestion(role)
    switch(answers.role) {
        case "Manager":
            inquirer
            .prompt(managerQuestions)
            .then((managerAnswers) => {
                console.log(managerAnswers);
                });
            break;
        case "Quit":
            inProgress = false;
        default:
            inProgress = false;
            break;
        }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}


// Use built-in read & write modules
const { readFileSync, writeFileSync } = require('fs')



// Create the index file and append the results with flag:a 
writeFileSync("./dist/index.html",createHTML(data), {flag: "a"});




//! function createHTML(data){
//     return `
//         <html>
//         <head></head>
//         <body>
//             <div class="container">
//             ${renderTeam(data)}
//                 <div class='team-member'>
//                     <p>Binja</b>
//                 </div>
//                 <div class='team-member'>
//                     <
//                 </div>
//             </div>
//         </body>
//         </html>
//     `
// }