const Manager = require("./files/manager.js");
const Engineer = require("./files/engineer.js");
const Intern = require("./files/intern.js");
const 


const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./website/temphtml");


inquirer.prompt([
  {
    name: "name",
    message: "What is oyur employees name?",
  },
  {
    name: "id",
    message: "Enter employee ID?",
  },
  {
    name: "job",
    message: "What is the employee's job?",
    type: "list",
    choices: ["Engineer", "Manager", "intern"],
  },
]);

let nextResponse = "";

if (response.job === "Engineer") {
  nextResponse = await inquirer.prompt([
    {
      name: "x",
      message: "whay is the employees office number",
    },
  ]);
}

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
