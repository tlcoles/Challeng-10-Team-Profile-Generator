const Manager = require('../lib/manager')

// Test that the parent property "email" passes
test("the email of the manager", function(){
    const Tamara = new Manager ("Tamara", 1, "tamara@fauxco.de", 1)
    expect(Tamara.email).toBe("tamara@fauxco.de");
})

// Test that the additional officeNumber property passes
test("the office number of the manager", function(){
    const Tamara = new Manager ("Tamara", 1, "tamara@fauxco.de", 1)
    expect(Tamara.officeNumber).toBe(1);
})

// Test that the child role replaces parent role
test("the role of the engineer", function(){
    const Tamara = new Manager ("Tamara", 1, "tamara@fauxco.de", 1)
    expect(Tamara.getRole()).toBe("Manager"); // testing the getRole function
})