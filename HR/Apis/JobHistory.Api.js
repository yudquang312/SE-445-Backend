const {getAllJobHistories, getJobHistoryByEmployeeId} = require("../Controllers/JobHistory.Controller");


const JobHistoryRoute = (app) => {
  app.get("/hr/job-histories", getAllJobHistories);
  app.get("/hr/job-histories/:employeeId", getJobHistoryByEmployeeId);
}

module.exports = JobHistoryRoute;