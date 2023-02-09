const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const db = require("./models");
db.sequelize.sync();

app.get("/ping", (req, res) => {
  res.json({ pong: true });
});

// routes
require("./routes")(app);

const PORT = process.env.PORT || 8888; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});