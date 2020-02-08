const db = require('../data/db-config.js');

module.exports = {
    find,
    // getShoppingList,
    // findById,
    // getInstructions,
    // getAllInstructions,
};

function find() {
    return db('projects')
}