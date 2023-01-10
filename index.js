const fs = require("fs");
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const questionsImport = require("./questions");
const questions = questionsImport.One;
const addADepartment = questionsImport.Two;
const addAnEmployee = questionsImport.Three;
const addARole = questionsImport.Four;

inquirer.prompt(questions).then((response) => {
  if (response.OpeningMenu == "I am finished") {
    // process Exit
  } else if (response.OpeningMenu == "View All Departments") {
    // view dept sql
  } else if (response.OpeningMenu == "View All Roles") {
    // view roles sql
  } else if (response.OpeningMenu == "View All Employees") {
    // view employees sql
  } else if (response.OpeningMenu == "Add A Department") {
    // Add department sql
  } else if (response.OpeningMenu == "Add A Role") {
    // Add role sql
  } else if (response.OpeningMenu == "Add An Employee") {
    // Add employee sql
  } else if (response.OpeningMenu == "Update An Employee Role") {
    // Update Employee sql
  }
});

function makeHtml(theHtml) {
  fs.writeFile("index.html", theHtml, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
