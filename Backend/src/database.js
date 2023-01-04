const mongoose = require("mongoose");
const dbName = "SoftluTions";
const uri = `mongodb+srv://Victor911704:Victor9117@atlascluster.cifxokm.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(db => console.log("Conexion a la base de datos exitosa"))
  .catch(err => console.log(err));
module.exports = mongoose;
