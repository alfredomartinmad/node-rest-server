require('./config/config');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// parse application/x-www-form-urlencoded && JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../server/public')));
//Configuración rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos Online');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto ' + process.env.PORT);
})