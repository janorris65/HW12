const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const questionsImport = require("./questions");
const questions = questionsImport.One;
const addADepartment = questionsImport.Two;
const addAnEmployee = questionsImport.Three;
const addARole = questionsImport.Four;

const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Rousseau65@",
    database: "fakecompany1_2023_db",
  },
  console.log(`Connected to the fakecompany1_2023_db database.`)
);

inquirer.prompt(questions).then((response) => {
  if (response.OpeningMenu === "I am finished") {
    // process Exit
  } else if (response.OpeningMenu === "View All Departments") {
    db.query("SELECT * FROM departments", (err, results) => {
      console.log(results);
    });
  } else if (response.OpeningMenu === "View All Roles") {
    db.query("SELECT * FROM role", (err, results) => {
      console.log(results);
    });
  } else if (response.OpeningMenu === "View All Employees") {
    db.query("SELECT * FROM employees", (err, results) => {
      console.log(results);
    });
  } else if (response.OpeningMenu === "Add A Department") {
    // Add department sql
  } else if (response.OpeningMenu === "Add A Role") {
    // Add role sql
  } else if (response.OpeningMenu === "Add An Employee") {
    // Add employee sql
  } else if (response.OpeningMenu === "Update An Employee Role") {
    // Update Employee sql
  }
});
