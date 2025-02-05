const express = require("express");
const app = express();
const port = 3030;
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const { user, userData } = require("./routes");

app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(helmet());

app.use(`/api/user`, user);
app.use(`/api/user`, userData);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
