const employee = ("./lib/employeeClass");
const manager = ("./lib/managerClass");
const engineer = ("./lib/engineerClass");
const intern = ("./lib/internClass");

generateTemplate = () => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
  </head>

  <body>
    <header>My Team</header>
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${employee.getName()}</h5>
            <h5 class="card-title">${employee.getRole()}</h5>
            <p class="card-text">${employee.getId()}</p>
            <p class="card-text">${employee.getEmail()}</p>
          
            
          </div>
        </div>
      </div>
    </div>  
  </body>
</html>
`}


module.exports = generateTemplate;