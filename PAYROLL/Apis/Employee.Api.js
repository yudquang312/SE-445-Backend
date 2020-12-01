
const {getAllEmployees, getEmployeeById} = require("../Controllers/Employee.Controller")


const EmployeeRoute = (app)=>{
  app.get("/payroll/employees", getAllEmployees);
  app.get("/payroll/employees/:employeeId", getEmployeeById);
}

module.exports = EmployeeRoute;