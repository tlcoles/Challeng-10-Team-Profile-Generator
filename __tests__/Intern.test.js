const Intern = require('../lib/intern')

test("the school of the intern", function(){
    const Javier = new Intern ("Javier", 5, "javier@fauxco.de", "ESMT Berlin")
    expect(Javier.getSchool()).toBe("ESMT Berlin"); // testing the getSchool function
})