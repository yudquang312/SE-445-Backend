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

const getAllUsers = async (req, res) => {
  try {
    const users = await executeMySQLQuery("SELECT * FROM users");
    return res.json({
      users,
    });
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await executeMySQLQuery(
      `SELECT * FROM users WHERE User_ID = '${userId}'`
    );
    return res.json({
      user,
    });
  } catch (error) {
    console.error(error);
  }
};

const checkLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    // console.log(req);
    // console.log(userName, password);
    const users = await executeMySQLQuery(
      `SELECT * FROM users WHERE User_Name = '${userName}' AND Password = '${password}'`
    );
    return res.json({
      users,
    });
  } catch (error) {
    console.error(error);
  }
};

const addUser = async (req, res) => {
  try {
    const { USER_NAME, PASSWORD, EMAIL, ACTIVE } = req.body;
    // const User_Name = USER_NAME;
    // const Password = PASSWORD;
    // const Email = EMAIL;
    // const Active = ACTIVE;
    const result = await executeMySQLQuery(
      `INSERT INTO users (User_Name, Password,	Email,	Active) VALUES(${USER_NAME}, ${PASSWORD}, 'NULL', ${ACTIVE})`
    );

    return res.json({
      result,
    });
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { USER_ID, USER_NAME, PASSWORD, EMAIL, ACTIVE } = req.body;
    const result = await executeMySQLQuery(
      `UPDATE users SET User_Name = ${USER_NAME}, Password = ${PASSWORD}, Email = '${EMAIL}', Active = ${ACTIVE} WHERE User_ID = ${USER_ID}`
    );
    return res.json({
      result,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { USER_ID } = req.body;
    const result = await executeMySQLQuery(
      `DELETE FROM users WHERE User_ID = ${USER_ID}`
    );
    return res.json({
      result,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  checkLogin,
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
