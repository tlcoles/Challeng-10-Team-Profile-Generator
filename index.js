// Use built-in read & write modules
const { readFileSync, writeFileSync } = require('fs')

// Call classes employee, engineer, intern, and manager
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


const Binja = new Engineer ("Binja", 2, "binja@fauxco.de")
const Tamara = new Manager ("Tamara", 1, "tamara@fauxco.de", 1)

// Create the index file and append the results with flag:a 
writeFileSync("./dist/index.html",`Here is the result: ${Binja}, ${Tamara}`, {flag: "a"})