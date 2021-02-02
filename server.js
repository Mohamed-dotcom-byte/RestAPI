const express = require("express");
//init app
const app = express();
app.use(express.json());
// dot.env setup
require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT;
//Routes setup
app.use("/", require("./routes/userRouter"));
//creating the server
app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`server is connencted on port ${port} `);
});
