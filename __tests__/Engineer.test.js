const Engineer = require('../lib/engineer')

// Test that parent class works
test("the name of the engineer", function(){
    const Binja = new Engineer ("Binja", 2, "binja@fauxco.de", "binjacodes")
    expect(Binja.name).toBe("Binja");
})

// Test that additional child property works
test("the github of the engineer", function(){
    const Constantine = new Engineer ("Constantine", 3, "constantine@fauxco.de", "constantcodes")
    expect(Constantine.getGithub()).toBe("constantcodes"); // testing the getGithub function
})

// Test that the child role replaces parent role
test("the role of the engineer", function(){
    const Amelie = new Engineer ("Amelie", 4, "amelie@fauxco.de", "ameliecodes")
    expect(Amelie.getRole()).toBe("Engineer"); // testing the getRole function
})