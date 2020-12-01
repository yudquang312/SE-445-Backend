const e = require("cors");
const mysql = require("mysql");

let connectMySQL = null;
const ConnectMySQL = () => {
  connectMySQL = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "payroll",
  });
};

const executeMySQLQuery = async (queryStatement) => {
  return new Promise(async (resolve, rej) => {
    ConnectMySQL();
    await connectMySQL.connect(async function (err) {
      if (err) throw err;
      await connectMySQL.query(queryStatement, function (err, res, fields) {
        if (err) throw err;
        resolve(res);
        connectMySQL.end();
      });
    });
  });
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await executeMySQLQuery("SELECT * FROM employee");
    return res.json({
      employees,
    });
  } catch (error) {
    console.error(error);
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await executeMySQLQuery(
      `SELECT * FROM employee WHERE idEmployee = ${employeeId}`
    );
    return res.json({
      employee,
    });
  } catch (error) {
    console.error(error);
  }
};

const addEmployee = async (req, res) => {};

module.exports = {
  getAllEmployees,
  getEmployeeById,
};
