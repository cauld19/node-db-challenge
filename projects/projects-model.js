const db = require('../data/db-config.js');

module.exports = {
    find,
    findResources,
    findTasks,
    findById,
    addProject,
    
};

function findById(id) {
    return db('projects')
      .where({ id })
      .first();
  }

function find() {
    return db('projects')
}

function findResources() {
    return db('resources')
}

function findTasks() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.project_name', 'p.project_description', 't.task_description', 't.task_notes', 't.task_completed')
}

// function findTasks(project_id) {
//     return db('projects as p') 
//         .join('tasks as t', 'p.id', 't.project_id')
//         .select('p.project_name', 'p.project_description', 't.task_description', 't.task_notes', 't.task_completed')
//         .where('p.id', project_id)
// }

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return findById(ids[0]);
          });
}