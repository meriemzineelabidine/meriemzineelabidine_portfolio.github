//importation
const express = require("express");
const cors = require("cors");
//connect avec base
const dbConnect = require("./config/db-connect");
require("dotenv").config();

//initialisation
const app = express();
dbConnect();
// creation
//midellwaire
app.use(cors());
app.use(express.json());
app.use("/about", require("./routes/about"));
app.use("/skills", require("./routes/skills"));
app.use("/projects", require("./routes/projects"));
app.use("/contact", require("./routes/contact"));
app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log(`serveur listen ${process.env.PORT}`)
);
