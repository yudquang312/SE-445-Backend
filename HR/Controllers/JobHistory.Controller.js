const sql = require("mssql");

const getAllJobHistories = async (req, res) => {
  try {
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`SELECT * FROM Job_History`;
    return res.json({
      jobHistories: result.recordset,
    });
    // executeSQLServerQuery(`select * from Benefit_Plans`);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

const getJobHistoryByEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.params;
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`SELECT * FROM Job_History WHERE Employee_ID = ${employeeId}`;
    return res.json({
      jobHistories: result.recordset,
    });
    // executeSQLServerQuery(`select * from Benefit_Plans`);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

module.exports = {
  getAllJobHistories,
  getJobHistoryByEmployeeId,
};
