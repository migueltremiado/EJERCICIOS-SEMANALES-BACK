const prompt = require("prompt-sync")();
const parseArgs = require("minimist");
let respuesta;
// console.log(process.argv);
// console.log(parseArgs(process.argv));
//console.log(parseArgs(process.argv.slice(2)));

const name = parseArgs(process.argv.slice(2));
//console.log(name.p);

//comprobar si existe argumento nombre
if (name.p) {
  respuesta = prompt(`hola  ${name.p}  como estas?`);
} else {
  respuesta = prompt(`hola, como estas?`);
}
//console.log(respuesta);
//bucle hastA conseguir la respuesta correcta
//el null es la respuesta del crtl+c, asi consigo que funcione
while (respuesta !== null) {
  if (respuesta.toLowerCase() === "bien") {
    console.log("me alegro");
    break;
  } else if (respuesta.toLowerCase() === "mal") {
    console.log("e lo que hay");
    break;
  } else if (respuesta.toLowerCase() === "regular") {
    console.log("nunca choveu que nun descampara");
    break;
  } else {
    respuesta = prompt(`lo siento, no te he entendido, como estas?`);
  }
}
