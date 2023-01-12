import inquirer from "inquirer";
import mysql from "mysql2";
import { questions } from "./questions.js";

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Rousseau65@",
    database: "fakecompany_db",
  },
  console.log(`Connected to the fakecompany1_2023_db database.`)
);

inquirer.prompt(questions).then((response) => {
  if (response.OpeningMenu === "I am finished") {
    // process Exit
  } else if (response.OpeningMenu === "View All Departments") {
    db.query("SELECT * FROM departments", (err, results) => {
      console.table(results);
    });
  } else if (response.OpeningMenu === "View All Roles") {
    db.query("SELECT * FROM role", (err, results) => {
      console.table(results);
    });
  } else if (response.OpeningMenu === "View All Employees") {
    db.query("SELECT * FROM employees", (err, results) => {
      console.table(results);
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
