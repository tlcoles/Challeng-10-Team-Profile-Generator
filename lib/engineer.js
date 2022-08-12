
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getGithub(){
        console.log ('This person has a github profile')
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;