const manager = "./lib/managerClass";
const engineer = "./lib/engineerClass";
const intern = "./lib/internClass";

generateTemplate = () => {
  return
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <style>
      body {
        background-color: #ccffff;
      }
      h1 {
        color: #ccffff;
      }
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .card {
        padding: 15px;
        border-radius: 6px;
        background-color: whitesmoke;
        color: black;
        margin: 15px;
      }
      .text {
        padding: 15px;
        border-radius: 6px;
        background-color: #ccffff;
        color: black;
        margin: 15px;
      }
      .col {
        flex: 1;
        text-align: center;
        color:  #ccffff;
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-red bg-dark justify-content-center align-items-center">
      <span class="navbar-brand mb-0 h1">
        <h1>My Team</h1>
      </span>
    </nav>
    <div class="row">
      <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
        <div class="col card-header">
          <h4> ${data.manName} </h4>
        </div>
        <div class="col card-header">
          <h4> ${manager.getRole}</h4>
        </div>
          <ul class="list-group list-group-flush text">
            <li class="list-group-item">ID: ${data.manIdNumber}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${data.manEmail}">${data.manEmail}</li>
            <li class="list-group-item">Office Number: ${data.manOfficeNumber}</li>
          </ul>
        </div>
      <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
        <div class="col card-header">
          <h4> ${data.enName} </h4>
        </div>
        <div class="col card-header">
          <h4> ${engineer.getRole} </h4>
        </div>
        <ul class="list-group list-group-flush text">
          <li class="list-group-item">ID: ${data.enIdNumber}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${data.enEmail}">${data.enEmail}</li>
          <li class="list-group-item"> <a href="https://github.com/${data.enGithub}">GitHub </a> </li>
        </ul>
      </div>
      <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
        <div class="col card-header">
          <h4> ${data.inName} </h4>
        </div>
        <div class="col card-header">
          <h4> ${intern.getRole} </h4>
        </div>
        <ul class="list-group list-group-flush text">
          <li class="list-group-item">ID: ${data.inIdNumber}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${data.inEmail}">${data.inEmail}</li>
          <li class="list-group-item">School: ${data.inSchool}</li>
        </ul>
      </div>
    </div>
  </body>
</html>
`}


module.exports = generateTemplate;