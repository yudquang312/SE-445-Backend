const {getAllPersonal, getPersonalByEmployeeId} = require("../Controllers/Personal.Controller");


const PersonalRoute = (app) =>{
  app.get("/hr/personals", getAllPersonal);
  app.get("/hr/personals/:employeeId", getPersonalByEmployeeId);
}

module.exports = PersonalRoute;