const {
  getAllUsers,
  getUserById,
  checkLogin,
  addUser,
  updateUser,
  deleteUser,
} = require("../Controllers/User.Controller");

const UserRoute = (app) => {
  app.post("/payroll/users/auth", checkLogin);
  app.get("/payroll/users", getAllUsers);
  app.get("/payroll/users/:userId", getUserById);
  app.post("/payroll/users/add", addUser);
  app.post("/payroll/users/update", updateUser);
  app.post("/payroll/users/delete", deleteUser);
};

module.exports = UserRoute;
