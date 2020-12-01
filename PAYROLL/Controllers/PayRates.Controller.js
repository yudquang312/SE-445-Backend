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

const getAllPayRates = async (req, res) => {
  try {
    const payRates = await executeMySQLQuery("SELECT * FROM pay_rates");
    return res.json({
      payRates,
    });
  } catch (error) {
    console.error(error);
  }
};

const getPayRatesById = async (req, res) => {
  try {
    const { payRateId } = req.params;
    const payRate = await executeMySQLQuery(
      `SELECT * FROM pay_rates WHERE idPay_Rates = ${payRateId}`
    );
    return res.json({
      payRate,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllPayRates,
  getPayRatesById,
};
