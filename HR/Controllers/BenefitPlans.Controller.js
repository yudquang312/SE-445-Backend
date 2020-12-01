const sql = require("mssql");

const getAllBenefitPlans = async (req, res) => {
  try {
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`SELECT * FROM Benefit_Plans`;
    return res.json({
      benefitPlans: result.recordset,
    });
    // executeSQLServerQuery(`select * from Benefit_Plans`);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

const getBenefitPlanById = async (req, res) => {
  try {
    const { benefitPlanId } = req.params;
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`SELECT * FROM Benefit_Plans WHERE Benefit_Plan_ID = ${benefitPlanId}`;
    return res.json({
      benefitPlans: result.recordset,
    });
    // executeSQLServerQuery(`select * from Benefit_Plans`);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

const addBF = async (req, res) => {
  try {
    const { PLAN_NAME, DEDUCTABLE, PERCENTAGE_COPAY } = req.body;
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`INSERT INTO Benefit_Plans(PLAN_NAME, DEDUCTABLE, PERCENTAGE_COPAY)
      VALUES (${PLAN_NAME}, ${DEDUCTABLE}, ${PERCENTAGE_COPAY})
      `;
    return res.json({
      result,
    });
  } catch (error) {
    console.error(error);
  }
};

const updateBF = async (req, res) => {
  try {
    const {
      BENEFIT_PLAN_ID,
      PLAN_NAME,
      DEDUCTABLE,
      PERCENTAGE_COPAY,
    } = req.body;
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`UPDATE Benefit_Plans SET PLAN_NAME = ${PLAN_NAME},
    DEDUCTABLE = ${DEDUCTABLE},
    PERCENTAGE_COPAY = ${PERCENTAGE_COPAY}
    WHERE BENEFIT_PLAN_ID = ${BENEFIT_PLAN_ID}`;
    return res.json({
      result,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteBF = async (req, res) => {
  try {
    const { BENEFIT_PLAN_ID } = req.body;
    console.log(BENEFIT_PLAN_ID);
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`DELETE FROM Benefit_Plans WHERE BENEFIT_PLAN_ID = ${+BENEFIT_PLAN_ID}`;
    return res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllBenefitPlans,
  getBenefitPlanById,
  addBF,
  updateBF,
  deleteBF,
};
