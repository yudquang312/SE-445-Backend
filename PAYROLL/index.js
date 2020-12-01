const UserRoute = require("./Apis/User.Api") ;
const EmployeeRoute = require( "./Apis/Employee.Api");
const PayRatesRoute = require("./Apis/PayRates.Api");

const PayRollRoute = (app) => {
  UserRoute(app);
  EmployeeRoute(app);
  PayRatesRoute(app);
}

module.exports = PayRollRoute;