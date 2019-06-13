
const name = 'clientes'

let schema = {
    id: 'number',
    name: 'string',
    gender: 'string'
}

let data = [
    {
        id: 1,
        name: "Omar",
        gender: "MALE"
    }
]

module.exports = {
    schema,
    data,
}