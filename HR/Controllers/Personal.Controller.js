const sql = require("mssql");

const getAllPersonal = async (req, res) => {
  try {
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`SELECT * FROM Personal`;
    return res.json({
      personals: result.recordset,
    });
    // executeSQLServerQuery(`select * from Benefit_Plans`);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

const getPersonalByEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.params;
    await sql.connect("mssql://sa:123@localhost/HR");
    const result = await sql.query`SELECT * FROM Personal WHERE Employee_ID = ${employeeId}`;
    return res.json({
      personals: result.recordset,
    });
    // executeSQLServerQuery(`select * from Benefit_Plans`);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

module.exports = {
  getAllPersonal,
  getPersonalByEmployeeId,
};
