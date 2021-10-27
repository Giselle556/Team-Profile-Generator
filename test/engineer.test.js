const Engineer = require("../lib/engineer");

test("is this an object", ()=>{
    const obj = new Engineer();
    expect(typeof(obj)).toBe("object");
  })
  
  // run test to check if engineer works
  test("can I set a name via the constructor", () => {
    const name = "giselle";
    const func = new Engineer(name);
    expect(func.name).toBe(name);
  });