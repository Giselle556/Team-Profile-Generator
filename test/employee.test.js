const Employee = require("../lib/employee");

test("is this an object", ()=>{
    const obj = new Employee();
    expect(typeof(obj)).toBe("object");
  })
  
  // run test to check if employee works
  test("can I set a name via the constructor", () => {
    const name = "giselle";
    const func = new Employee(name);
    expect(func.name).toBe(name);
  });