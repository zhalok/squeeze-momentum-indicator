const express = require("express");
const cors = require("cors");
const squeeze_momentum_router = require("./routes/squeeze-momentum-indicator");
const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Methods", "*");

  res.setHeader("Access-Control-Allow-Headers", "*");

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.use(express.json());

app.use("/calculate-squeeze-momentum", squeeze_momentum_router);

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
