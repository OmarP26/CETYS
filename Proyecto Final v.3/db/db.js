
const collections = {
    clientes: require('./clientes'),
    ordenes: require('./ordenes'),
}

function validateObject(object, schema) {
    for(let key in object) {
        if(typeof object[key] !== schema[key])
            return false
    }
    return true
}
function getLastId(collection) {
    let data = collections[collection].data
    let lastObj = data[data.length - 1] || {id: 0}
    return lastObj.id
}

function select(collection, id, clienteId) {
    let data = collections[collection].data
if(id) {
    return data.find(e => e.id === id && (clienteId ? e.clienteId === clienteId : true))
    } else {
        return data.filter(e => clienteId ? e.clienteId === clienteId : true)
    }
}

function insert(collection, object) {
    let id = getLastId(collection)
    Object.assign(object, {id: id + 1})
    if(validateObject(object, collections[collection].schema)) {
        collections[collection].data.push(object)
        return object
    }
    return null
}

function update(collection, object) {
    let id = object.id
    if(validateObject(object, collections[collection].schema)) {
        let data = collections[collection].data
        let element = data.find(e => e.id === id)
        Object.assign(element, object)
        return object
    }
    return null
}

function remove(collection, id) {
    let data = collections[collection].data
    let index = data.findIndex(e => e.id === id)
    let object = data.splice(index, 1)
    return object
}

module.exports = {
    select,
    insert,
    update,
    remove,
};