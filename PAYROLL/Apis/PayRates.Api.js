const {getAllPayRates, getPayRatesById} =  require("../Controllers/PayRates.Controller");

const PayRatesRoute = (app) =>{
  app.get("/payroll/pay-rates", getAllPayRates);
  app.get("/payroll/pay-rates/:payRateId", getPayRatesById);
}

module.exports = PayRatesRoute;