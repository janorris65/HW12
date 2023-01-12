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
    promptQuestions(questions);
  } else if (response.OpeningMenu === "View All Roles") {
    db.query(
      "SELECT role.id, role.title, role.salary, departments.name FROM role JOIN departments ON role.department_id = departments.id",
      (err, results) => {
        console.table(`/n${results}`);
      }
    );
    promptQuestions(questions);
  } else if (response.OpeningMenu === "View All Employees") {
    db.query(
      "SELECT e.id,CONCAT(e.first_name,' ', e.last_name) AS 'Employee', IFNULL( CONCAT(m.first_name,' ', m.last_name),'Executive') AS 'Manager', role.title AS Title, role.salary AS Salary, departments.name AS Dept FROM employees e LEFT JOIN employees m ON m.id = e.manager_id JOIN role ON e.role_id = role.id JOIN departments ON role.department_id = departments.id;",
      (err, results) => {
        console.table(`/n${results}`);
      }
    );
    promptQuestions(questions);
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

function promptQuestions(questionSet) {
  inquirer.prompt(questionSet).then((response) => {
    questionSetFollowUp(response);
  });
}

function questionSetFollowUp(response) {
  if (response.OpeningMenu === "I am finished") {
    // process Exit
  } else if (response.OpeningMenu === "View All Departments") {
    db.query("SELECT * FROM departments", (err, results) => {
      console.table(`/n${results}`);
    });
    promptQuestions(questions);
  } else if (response.OpeningMenu === "View All Roles") {
    db.query(
      "SELECT role.id, role.title, role.salary, departments.name FROM role JOIN departments ON role.department_id = departments.id",
      (err, results) => {
        console.table(`/n${results}`);
      }
    );
    promptQuestions(questions);
  } else if (response.OpeningMenu === "View All Employees") {
    db.query(
      "SELECT e.id,CONCAT(e.first_name,' ', e.last_name) AS 'Employee', IFNULL( CONCAT(m.first_name,' ', m.last_name),'Executive') AS 'Manager', role.title AS Title, role.salary AS Salary, departments.name AS Dept FROM employees e LEFT JOIN employees m ON m.id = e.manager_id JOIN role ON e.role_id = role.id JOIN departments ON role.department_id = departments.id;",
      (err, results) => {
        console.table(`/n${results}`);
      }
    );
    promptQuestions(questions);
  } else if (response.OpeningMenu === "Add A Department") {
    // Add department sql
  } else if (response.OpeningMenu === "Add A Role") {
    // Add role sql
  } else if (response.OpeningMenu === "Add An Employee") {
    // Add employee sql
  } else if (response.OpeningMenu === "Update An Employee Role") {
    // Update Employee sql
  }
}
