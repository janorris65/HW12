const fs = require("fs");
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const questionsImport = require("./questions");
const questions = questionsImport.One;

const lowlyEmployeeArray = [];
const lowlyEmployeeArrayString = [];
let lowlyEmployeeArrayStringFinal;
let TheManager;
let ManagerinHtml;

inquirer.prompt(questions).then((response) => {
  TheManager = new Manager(
    response.managerName,
    response.managerID,
    response.managerEmail,
    response.managerOffice
  );
  if (response.employeeType == "I am finished") {
    makeManager(TheManager);
    makeHtml(theHtml);
  } else if (response.employeeType == "Engineer") {
    engineerCall(questionsEngineer);
  } else if (response.employeeType == "Intern") {
    internCall(questionsIntern);
  }
});

function engineerCall(questionsEngineer) {
  inquirer.prompt(questionsEngineer).then((response) => {
    const engineer = new Engineer(
      response.engineerName,
      response.engineerID,
      response.engineerEmail,
      response.engineerGit
    );
    lowlyEmployeeArray.push(engineer);
    if (response.employeeType == "I am finished") {
      makeManager(TheManager);
      addWorkersHtml(lowlyEmployeeArray);
      lowlyEmployeeArrayStringFinal = lowlyEmployeeArrayString.join(" ");
      const theHtml = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee Log</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css"
        </head>
        <body class="d-inline-flex flex-column align-items-center mb-3">
            <header id="theMan">
            ${ManagerinHtml}
            </header>
            <main class="d-inline-flex flex-row" id="theWorkers">
            ${lowlyEmployeeArrayStringFinal}
            </main>
        </body>
        </html>`;
      makeHtml(theHtml);
    } else if (response.employeeType == "Engineer") {
      engineerCall(questionsEngineer);
    } else if (response.employeeType == "Intern") {
      internCall(questionsIntern);
    }
  });
}

function internCall(questionsIntern) {
  inquirer.prompt(questionsIntern).then((response) => {
    const intern = new Intern(
      response.internName,
      response.internID,
      response.internEmail,
      response.internUni
    );
    lowlyEmployeeArray.push(intern);
    if (response.employeeType == "I am finished") {
      makeManager(TheManager);
      addWorkersHtml(lowlyEmployeeArray);
      lowlyEmployeeArrayStringFinal = lowlyEmployeeArrayString.join(" ");
      const theHtml = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee Log</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css"
        </head>
        <body class="d-inline-flex flex-column align-items-center mb-3">
            <header id="theMan">
            ${ManagerinHtml}
            </header>
            <main class="d-inline-flex flex-row" id="theWorkers">
            ${lowlyEmployeeArrayStringFinal}
            </main>
        </body>
        </html>`;
      makeHtml(theHtml);
    } else if (response.employeeType == "Engineer") {
      engineerCall(questionsEngineer);
    } else if (response.employeeType == "Intern") {
      internCall(questionsIntern);
    }
  });
}

function makeManager(management) {
  ManagerinHtml = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${management.getRole()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${management.getName()}</h6>
      <p class="card-text">ID:${management.getID()}</p>
      <p class="card-text">Office Number:${management.getofficeNum()}</p>
      <a href="mailto:${management.getEmail()}" class="card-link">${management.getEmail()}</a>
    </div>
  </div>`;
}

function addWorkersHtml(thePeople) {
  thePeople.forEach((element) => {
    if (element.getRole() == "engineer") {
      const engineerToString = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.getRole()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.getName()}</h6>
              <p class="card-text">ID:${element.getID()}</p>
              <p class="card-text">GitHub:${element.getgitHub()}</p>
              <a href="mailto:${element.getEmail()}" class="card-link">${element.getEmail()}</a>
            </div>
          </div>`;
      lowlyEmployeeArrayString.push(engineerToString);
    } else if (element.getRole() == "Intern") {
      const internToString = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.getRole()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.getName()}</h6>
              <p class="card-text">ID:${element.getID()}</p>
              <p class="card-text">University:${element.getUni()}</p>
              <a href="mailto:${element.getEmail()}" class="card-link">${element.getEmail()}</a>
            </div>
          </div>`;
      lowlyEmployeeArrayString.push(internToString);
    }
  });
}

function makeHtml(theHtml) {
  fs.writeFile("index.html", theHtml, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
