const Manager = require('../lib/manager');

test("does this return an number", ()=>{
    const id = new Manager("giselle", 1,"test@test.com", 21)
    expect(id.officeNumber).toBe(21);
})