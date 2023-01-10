const questions = [
  {
    type: "list",
    name: "employeeType",
    message: "Who would you like to add next?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add A Department",
      "Add A Role",
      "Add an Employee",
      "Update an Employee Role",
      "I am Finished!!",
    ],
  },
];

module.exports = {
  One: questions,
};
