const db = require('../data/db-config.js');

module.exports = {
    find,
    findResources,
    // findById,
    // getInstructions,
    // getAllInstructions,
};

function find() {
    return db('projects')
}

function findResources() {
    return db('resources')
}