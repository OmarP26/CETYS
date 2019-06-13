
const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//logica de los modelos
const indexRouter = require('./routes/index');
const clientesRouter = require('./routes/clientes');
const ordenesRouter = require('./routes/ordenes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Rutas API
//app.use(app.router);
app.use('/', indexRouter)
app.use('/clientes', clientesRouter)
app.use('/clientes/:clienteID/ordenes', (req, res, next) => {
    let clienteID = parseInt(req.params.clienteID)
    req.body.clienteID = clienteID
    next()
}, ordenesRouter);
app.use('/ordenes', ordenesRouter);

//app.listen(3000, () => {
//    console.log("El servidor esta corriente en el puerto 3000");
//});

module.exports = app;
//module.exports = router;
