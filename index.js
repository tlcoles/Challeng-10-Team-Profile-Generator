// Call inquirer CLI to prompt for information
const inquirer = require('inquirer');
const express = require('express');

// Call classes employee, engineer, intern, and manager
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'list',
        message: 'Select employee type: ',
        name: 'employee-type',
        choices: ['manager', 'engineer', 'intern']
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// Use built-in read & write modules
const { readFileSync, writeFileSync } = require('fs')


// Test with dummy people

const Binja = new Engineer ("Binja", 2, "binja@fauxco.de", "binjacodes")
const Tamara = new Manager ("Tamara", 1, "tamara@fauxco.de", 1)
const Constantine = new Engineer ("Constantine", 3, "constantine@fauxco.de", "constantcodes")
const Amelie = new Engineer ("Amelie", 4, "amelie@fauxco.de", "ameliecodes")

// Create the index file and append the results with flag:a 
writeFileSync("./dist/index.html",`Here is the result: ${Binja.name}, ${Tamara.id}`, {flag: "a"});
