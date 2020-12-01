const BenefitPlansRoute = require("./Apis/BenefitPlans.Api");
const EmploymentRoute = require("./Apis/Employment.Api");
const JobHistoryRoute = require("./Apis/JobHistory.Api");
const PersonalRoute = require("./Apis/Personal.Api");

const HRRoute = (app) =>{
  BenefitPlansRoute(app);
  EmploymentRoute(app);
  JobHistoryRoute(app);
  PersonalRoute(app);
}

module.exports = HRRoute;

