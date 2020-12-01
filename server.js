const express = require("express");
const app = express();
const PORT = 6969;
const bodyParser = require("body-parser");
const cors = require("cors");
const PayRollRoute = require("./PAYROLL/index");
const HRRoute = require("./HR/index");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencodedno

PayRollRoute(app);
HRRoute(app);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT} !`));
