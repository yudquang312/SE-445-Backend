const sql = require("mssql");

const getAllEmployments = async (req, res) => {
  try {
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`SELECT * FROM Employment`;
    return res.json({
      employments: result.recordset,
    });
    // executeSQLServerQuery(`select * from Benefit_Plans`);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

const getEmploymentByEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.params;
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`SELECT * FROM Employment WHERE Employee_ID = ${employeeId}`;
    return res.json({
      employments: result.recordset,
    });
    // executeSQLServerQuery(`select * from Benefit_Plans`);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

module.exports = {
  getAllEmployments,
  getEmploymentByEmployeeId,
};
