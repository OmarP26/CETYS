
const express = require('express');
let router = express.Router();
let DB = require('../db/db');

router.get('/', (req, res, next) => {
    let clientes = DB.select('clientes')
    res.status(200).send(clientes)
});

router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let cliente = DB. select('clientes', id)
    res.status(200).send(cliente)
});

router.post('/', (req, res, next) => {
    let cliente = DB.insert('clientes', req.body)
    res.status(200).send(cliente)
});

router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let cliente = DB.update('clientes', object)
    res.status(200).send(cliente)
});

router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.in)
    let cliente = DB.remove('clientes', id)
    res.status(200).send(cliente)
});

module.exports = router;