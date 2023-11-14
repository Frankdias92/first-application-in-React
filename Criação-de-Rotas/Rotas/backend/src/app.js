const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clientRoute = require('./routes/clientRoute');
// meu app resebe meu arquivo de routa e Tenho que setar a rota

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// aqui estou setando a rota inicial
app.use('/cliente', clientRoute);

module.exports = app;