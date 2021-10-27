const Intern = require("../lib/intern");

test("is this an object", ()=>{
    const obj = new Intern();
    expect(typeof(obj)).toBe("object");
  })
  
  // run test to check if engineer works
  test("can I set a name via the constructor", () => {
    const name = "giselle";
    const func = new Intern(name);
    expect(func.name).toBe(name);
  });
