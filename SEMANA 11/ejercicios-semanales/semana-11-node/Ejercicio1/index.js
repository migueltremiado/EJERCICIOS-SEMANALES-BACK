const { readFile } = require("fs");
const parseArgs = require("minimist");

const entradas = parseArgs(process.argv.slice(2));
const path = require("path");
const fs = require("fs").promises;

const agregarEventoJson = async (path, content) => {
  try {
    const data = await fs.readFile(path, "utf8");
    // console.log(readFile);
    const json = JSON.parse(data);
    // console.log(json);
    json.push(content);
    //console.log(json);
    await fs.writeFile(path, JSON.stringify(json));
    if (entradas.x) {
      console.log(json);
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`error leyendo el JSON ${path}, ese archivo no existe`);
    } else {
      console.error(`error guardando el JSON ${path}`, err);
    }
  }
};

if (entradas.f && entradas.d) {
  // console.log(`${entradas.f}`);
  // console.log(`${entradas.d}`);
  const miObjeto = { fecha: entradas.f, descripcion: entradas.d };
  agregarEventoJson(path.join(__dirname, "data", "evento.json"), miObjeto);
} else {
  console.error("llamada incorrecta");
}
