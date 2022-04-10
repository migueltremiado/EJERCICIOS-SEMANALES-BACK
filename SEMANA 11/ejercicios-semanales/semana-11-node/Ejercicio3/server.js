const express = require("express");
const { userInfo } = require("os");
//const path = require("path");
//(path.join(__dirname
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req);

  next();
});
//ejercicio devolver hora

app.get("/hora", (req, res) => {
  let hoy = new Date();
  let hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();

  res.send(hora);
});

app.get("/directorio", (req, res) => {
  res.send(__dirname);
});
app.listen(3000, () => {
  console.log("server funcionando");
});
app.use((req, res) => {
  res.statusCode = 404;
  res.sendStatus(res.statusCode);
});
