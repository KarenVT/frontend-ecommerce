const db = require('../db.js');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request for categories.');

    try {
        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: db.categories || []
        };
    } catch (error) {
        context.log.error('Error en la función categories:', error);
        context.res = {
            status: 500,
            body: { error: "Error al obtener las categorías" }
        };
    }
}; 