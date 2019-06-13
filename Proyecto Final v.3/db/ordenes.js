
const name = 'ordenes'

let schema = {
    id: 'number',
    clienteId: 'number',
    meal: 'string',
    price: 'number'
}

let data = [
    {
        id: 1,
        clienteId : 1,
        meal: 'sandwish',
        price: 50
    }
]

module.exports = {
    schema,
    data,
}