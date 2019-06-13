
const express = require('express');
let router = express.Router();
let DB = require('../db/db');

router.get('/', (req, res, next) => {
    let clienteId = parseInt(req.body.userId)
    let ordenes = DB.select('ordenes', null, clienteId)
    res.status(200).send(ordenes)
});

router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let clienteId = parseInt(req.body.clienteId)
    let orden = DB.select('ordenes', id, clienteId)
    res.status(200).send(orden)
});

router.post('/', (req, res, next) => {
    let orden = DB.insert('ordenes', req.body)
    res.status(200).send(orden)
});

router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let orden = DB.update('ordenes', object)
    res.status(200).send(orden)
});

router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let orden = DB.remove('ordenes', id)
    res.status(200).send(orden)
});

module.exports = router;