const questions = [
  {
    type: "list",
    name: "OpeningMenu",
    message: "Who would you like to add next?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add A Department",
      "Add A Role",
      "Add An Employee",
      "Update An Employee Role",
      "I am Finished!!",
    ],
  },
];

const addADepartment = [
  {
    type: "input",
    name: "departmentName",
    message: "What is the department's name",
  },
];

const addAnEmployee = [
  {
    type: "input",
    name: "employeeFirstName",
    message: "What's the employee's First name",
  },
  {
    type: "input",
    name: "employeeLastName",
    message: "What is the employee's Last name",
  },
  {
    type: "input",
    name: "employeeRoleID",
    message: "What is the employee's role ID",
  },
  {
    type: "input",
    name: "employeeManagerID",
    message: "What is their manager's ID",
  },
];

const addARole = [
  {
    type: "input",
    name: "roleName",
    message: "What is the role's name",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "What is the salary",
  },
  {
    type: "input",
    name: "roleDepartmentID",
    message: "What is the department ID?",
  },
];

export { questions, addADepartment, addAnEmployee, addARole };
