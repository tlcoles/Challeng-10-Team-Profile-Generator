const Intern = require('../lib/intern')

// Test that the parent class properties are working
test("the id of the intern", function(){
    const Javier = new Intern ("Javier", 5, "javier@fauxco.de", "ESMT Berlin")
    expect(Javier.id).toBe(5); // testing the getSchool function
})

// Test that the additional property is passing through
test("the school of the intern", function(){
    const Javier = new Intern ("Javier", 5, "javier@fauxco.de", "ESMT Berlin")
    expect(Javier.getSchool()).toBe("ESMT Berlin"); // testing the getSchool function
})

// Test that the child role replaces parent role
test("the role of the engineer", function(){
    const Javier = new Intern ("Javier", 5, "javier@fauxco.de", "ESMT Berlin")
    expect(Javier.getRole()).toBe("Intern"); // testing the getRole function
})