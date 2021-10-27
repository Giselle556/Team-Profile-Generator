const generateHTML = (employees) =>
  `<!DOCTYPE html>
<html lang="en">
​
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
​
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-6 team-heading alert-info">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
             ${employees.filter((employee) => employee.getRole() === "Manager")
               .map(renderManager)}
             ${employees
               .filter((employee) => employee.getRole() === "Engineer")
               .map(renderEngineer)}
               
             ${employees
               .filter((employee) => employee.getRole() === "Intern")
               .map(renderIntern)}
            </div>
        </div>
    </div>
</body>
</html>`;

const renderManager = (manager) => 
`<div class="ml-4 mr-4">
<div class="card employee-card">
<div class="card-header alert-danger">
    <h2 class="card-title">${manager.name}</h2>
    <h3 class="card-title">Manager</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>
</div>
</div>
`;

const renderEngineer = (engineer) => `
<div class="ml-4 mr-4">
<div class="card employee-card">
    <div class="card-header alert-primary" >
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title">Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email:  <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
        </ul>
    </div>
</div>
</div>
`;

const renderIntern = (intern) => `
<div class="ml-4 mr-4">
<div class="card employee-card">
<div class="card-header alert-success">
    <h2 class="card-title">${intern.name}</h2>
    <h3 class="card-title">Intern</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
</div>
</div>
`;

module.exports = generateHTML;

