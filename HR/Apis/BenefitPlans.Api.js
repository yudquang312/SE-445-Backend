const {
  getAllBenefitPlans,
  getBenefitPlanById,
  addBF,
  updateBF,
  deleteBF,
} = require("../Controllers/BenefitPlans.Controller");

const BenefitPlansRoute = (app) => {
  app.get("/hr/benefit-plans", getAllBenefitPlans);
  app.get("/hr/benefit-plans/:benefitPlansId", getBenefitPlanById);
  app.post("/hr/benefit-plans/add", addBF);
  app.post("/hr/benefit-plans/update", updateBF);
  app.post("/hr/benefit-plans/delete", deleteBF);
};

module.exports = BenefitPlansRoute;
