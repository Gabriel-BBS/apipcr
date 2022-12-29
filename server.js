const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MatRouter = require('./app/routes/material.router')

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to apipcr application." });
});
//incluir routes
//rota do material
app.use('/apipcr/material',MatRouter);
//rota do painel

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
  // import db para usar a função sync, atualizando o banco de dados
  const db = require('./app/models/index.js')
  // db.sequelize.sync().then(console.log("Banco atualizado"));

 //teste da conexão com o banco de dados
  try {
    db.sequelize.authenticate();
    console.log('A conexão foi um sucesso!');

  } catch (error) {
    console.error('Não foi possível conectar com o banco', error);
  }
 


  