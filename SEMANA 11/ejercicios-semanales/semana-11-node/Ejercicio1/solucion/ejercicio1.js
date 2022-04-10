


// core modules: nombre de los módulos que trae node instalados por defecto

const os = require("os"); // OS - operating system - sistema operativo

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.tmpdir());

const path = require("path"); // path - ruta

const nombreArchivo = "ejemplo.txt";
const rutaArchivo = path.join(__dirname, nombreArchivo);

// console.log(path.extname(rutaArchivo));
// console.log(path.resolve(__dirname, '../node-dia-1'));
// console.log(path.normalize("/Users/miusuario//test/otraruta/../1.txt"));

const fs = require("fs").promises; // file system - sistema de ficheros/archivos

// versión asíncrona con callbacks
// fs.writeFile("ejemplo.txt", "texto a guardar", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('el archivo se ha guardado correctamente');
//   }
// });

// versión síncrona, solo utilizar para hacer pruebas, siempre usar la versión asíncrona por mejor rendimiento
// fs.writeFileSync("ejemplo.txt", "texto a guardar");

const writeFile = async (filename, content) => {
  try {
    await fs.writeFile(filename, content);
  } catch (err) {
    console.error(`error guardando el archivo ${filename}`, err);
  }
};

const readFile = async (filename) => {
  try {
    const data = await fs.readFile(filename, "utf8");
    console.log(data);
  } catch (err) {
    // trivia: ENOENT viene de Error NO ENtity => no hay/existe la entidad
    if (err.code === "ENOENT") {
      console.error(
        `error leyendo el archivo ${filename}, ese archivo no existe`
      );
    } else {
      console.error(`error leyendo el archivo ${filename}`, err);
    }
  }
};

const deleteFile = async (filename) => {
  try {
    await fs.unlink(filename);
  } catch (err) {
    console.error(`error borrando el archivo ${filename}`, err);
  }
};

const printMetadata = async (filename) => {
  try {
    const data = await fs.stat(filename, "utf8");
    console.log(data);
  } catch (err) {
    console.error(`error leyendo los metadatos del archivo ${filename}`, err);
  }
};

// const filePath = path.join(__dirname, 'data', 'data.txt');
// writeFile(filePath, 'lo estoy escribiendo con promesas!');
// readFile('ejemplo.txt');
// deleteFile('ejemplo.txt');
// printMetadata('index.js');

// modulo URL
// const url = require('url'); // no es necesario si utilizamos unicamente la variable globarl "URL"

const urlString = "https://google.com/test?query1=testquery&b=200&param2=false";

const myUrl = new URL(urlString);

myUrl.host = "twitter.com";
myUrl.port = 3000;
myUrl.username = "admin";
myUrl.password = "1234";
myUrl.hash = "seccion-indice";

// console.log(myUrl);

const notEncodedUri = "esta cadena de texto no es URI válido ñññ";

const encodedUri = encodeURIComponent(notEncodedUri);

const decodedUri = decodeURIComponent(encodedUri);

// console.log(encodedUri);
// console.log(decodedUri);

// JSON => JavaScript Object Notation
// const miJson = require('./data/example.json');

const readJson = async (path) => {
  try {
    const data = await fs.readFile(path, "utf8");
    const json = JSON.parse(data);
    console.log(json);
    return json;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`error leyendo el JSON ${filename}, ese archivo no existe`);
    } else {
      console.error(`error leyendo el JSON ${filename}`, err);
    }
  }
};

const writeJson = async (path, content) => {
  try {
    await fs.writeFile(path, JSON.stringify(content));
  } catch (err) {
    console.error(`error guardando el JSON ${filename}`, err);
  }
};

// readJson(path.join(__dirname, 'data', 'example.json'));

const miObjeto = {
  title: "don quijote",
  author: "cervantes",
  arrayDeEjemplo: [100, 200, 300],
  unBoolean: true,
};

// writeJson(path.join(__dirname, 'data', 'example2.json'), miObjeto);

const miArray = require("./data/example3.json");
// console.log(miArray);

//eventos
// emisor => evento => receptor

process.on("exit", () => {
  console.log("cerrando aplicación...");
});

process.on("SIGINT", () => {
  console.log("parando el programa forzosamente");
  process.exit(-1);
});

setInterval(() => {
  console.log(new Date());
}, 2000);

process.on("uncaughtException", (err) => {
  console.error(err);
});

process.on("unhandledRejection", (err) => {
  console.error("promesa KO", err);
  process.exit(-1);
});

Promise.reject("porque no");
// throw new Error('este es un error sin atrapar');







const path = require('path');
const express = require('express');

const app = express();

// MIDDLEWARE
app.use(express.json());

const staticPath = path.resolve(__dirname, 'static');
app.use('/public', express.static(staticPath));

const logYSuma = (req, res, next) => {
  if (!req.numeroDeVeces) {
    req.numeroDeVeces = 1;
  } else {
    req.numeroDeVeces++;
  }

  console.log(`middleware numero ${req.numeroDeVeces}`);
  next();
};

app.use(logYSuma);
app.use(logYSuma);
app.use(logYSuma);
app.use(logYSuma);
app.use(logYSuma);

// ENDPOINTS
// app.metodo('ruta', handler)
app.get('/', (req, res) => {
  console.log(req.ip);
  res.send('Hola!');
});

app.post('/users', (req, res) => {
  console.log(req.body);

  res.end();
});

app.get('/users', (req, res) => {
  // acceso a los query params
  console.log(req.query);
  console.log(req.body);

  // header - valor
  res.set('X-Mi-Header', 'el valor');

  // enviar datos con los headers correctos
  // res.send({
  //   id: 1,
  //   username: 'testuser',
  // });

  // enviar contenido de un archivo
  res.sendFile(path.join(__dirname, 'users.json'));
});

//               v- path param
app.get('/users/:idUser', (req, res) => {
  console.log(req.params);
  // const idUser = req.params.idUser;
  let { idUser } = req.params;
  idUser = Number.parseInt(idUser);

  if (isNaN(idUser)) {
    res.statusCode = 400;
    return res.send('/users/:idUser acepta solamente numeros');
  }

  const users = require('./users.json');

  const user = users.filter((u) => u.id === idUser);

  if (!user.length) {
    // res.statusCode = 404;
    return res.sendStatus(404);
  }

  res.send(user[0]);
});

app.use((req, res) => {
  // cambiar el status code de la respuesta
  res.statusCode = 404;
  // res.status(404).sendStatus(res.statusCode);
  res.send('Not found :(');
});

app.listen(3000, () => {
  console.log('servidor funcionando');
});
