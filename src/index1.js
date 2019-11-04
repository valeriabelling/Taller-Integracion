const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require('./routes/herramientasABM'));

app.listen(3000);
console.log('Escuchando puerto 3000');