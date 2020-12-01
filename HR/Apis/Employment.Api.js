const {getAllEmployments, getEmploymentByEmployeeId} = require("../Controllers/Employment.Controller");


const EmploymentRoute = (app) => {
  app.get("/hr/employments", getAllEmployments);
  app.get("/hr/employments/:employeeId", getEmploymentByEmployeeId);
}

module.exports = EmploymentRoute;