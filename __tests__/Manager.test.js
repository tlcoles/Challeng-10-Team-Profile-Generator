const Manager = require('../lib/manager')

test("the office number of the manager", function(){
    const Tamara = new Manager ("Tamara", 1, "tamara@fauxco.de", 1)
    expect(Tamara.officeNumber).toBe(1);
})