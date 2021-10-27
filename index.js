const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateHTML = require("./dist/generate.html.js");

const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];

// questions for the Manager entering the data
const questionsForManager = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Manager?",
  },
  {
    type: "number",
    name: "id",
    message: "What is the ID number for this Manager?",
  },
  {
    type: "input",

    name: "email",
    message: "What is the email address for this Manager?",
  },
  {
    type: "number",
    name: "officeNumber",
    message: "What is the office number for this Manager?",
  },
];
// questions based on entering an Employee of an Engineer
const questionsForEngineer = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Engineer?",
  },
  {
    type: "number",
    name: "id",
    message: "What is the ID number for this Engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address for this Engineer?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the GitHub for the Engineer?",
  },
];
// Questions based on entering an Employee of Intern
const questionsForIntern = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Intern?",
  },
  {
    type: "number",
    name: "id",
    message: "What is the ID number for this Intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address for this Intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does this Intern attend?",
  },
];
// option to add more Employees
const addEmployees = [
  {
    type: "list",
    name: "inputEmployee",
    message: "Would you like to input another employee?",
    choices: ["Input Engineer", "Input Intern", "No other team members to add"],
  },
];

// prompt manager's questions.
inquirer.prompt(questionsForManager).then((data) => {
  const employee = new Manager(
    data.name,
    data.id,
    data.email,
    data.officeNumber
  );
  employees.push(employee);
  console.log(employees);
  addEmployee(addEmployees);
});

// function to add engineer's or interns
function addEmployee() {
  inquirer.prompt(addEmployees).then((data) => {
    console.log(data.inputEmployee);
    switch (data.inputEmployee) {
      case "Input Engineer":
        addEngineer();
        break;
      case "Input Intern":
        addIntern();
        break;
        case "No other team members to add":
         writeHTML();
        default:
      
    }
  });
}

// function for the case switch to add the Engineer data
function addEngineer() {
  inquirer.prompt(questionsForEngineer).then((data) => {
    const employee = new Engineer(data.name, data.id, data.email, data.github);
    employees.push(employee);
    console.log(employees);
    return addEmployee();
  });
}

// function for the case switch to add the Intern data
function addIntern() {
  inquirer.prompt(questionsForIntern).then((data) => {
    const employee = new Intern(data.name, data.id, data.email, data.school);
    employees.push(employee);
    console.log(employees);
    return addEmployee();
  });
}

function writeHTML() {
    const htmlPageContent = generateHTML(employees)
  fs.writeFile("index.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("HTML file has been created!")
  );
}