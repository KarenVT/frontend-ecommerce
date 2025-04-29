const db = require('../../src/db/db.json');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try {
        context.res = {
            // status: 200, /* Defaults to 200 */
            headers: {
                'Content-Type': 'application/json'
            },
            body: db.products
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: "Error al obtener los productos" }
        };
    }
}; 