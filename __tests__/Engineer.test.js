const Engineer = require('../lib/engineer')

test("the github of the engineer", function(){
    const Constantine = new Engineer ("Constantine", 3, "constantine@fauxco.de", "constantcodes")
    expect(Constantine.getGithub()).toBe("constantcodes"); // testing the getGithub function
})

test("the role of the engineer", function(){
    const Amelie = new Engineer ("Amelie", 4, "amelie@fauxco.de", "ameliecodes")
    expect(Amelie.getRole()).toBe("Engineer"); // testing the getRole function
})