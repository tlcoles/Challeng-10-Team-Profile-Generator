const Employee = require('../lib/employee')

test("the name of the employee", function(){
    const Binja = new Employee ("Binja", 2, "binja@fauxco.de")
    expect(Binja.name).toBe("Binja");
})

test("the id of the employee", function(){
    const Constantine = new Employee ("Constantine", 3, "constantine@fauxco.de", "constantcodes")
    expect(Constantine.id).toBe(3);
})

test("the email of the employee", function(){
    const Amelie = new Employee ("Amelie", 4, "amelie@fauxco.de", "ameliecodes")
    expect(Amelie.email).toBe("amelie@fauxco.de");
})