const express = require("express");
const cors = require("cors");
const app = express();
const port = 5400;



require("./database");
app.use(cors());
app.use(express.json());

app.get("/API-Softlutions", (req, res) => {
  res.status(200).json({ msg: "Softlutions API" });
});

app.use("/users", require("./routes/users.routes"));
app.use("/devs", require("./routes/dev.routes"));

app.listen(port, () => {
  console.log("Softlutions API corriendo en el puerto", port);
});
