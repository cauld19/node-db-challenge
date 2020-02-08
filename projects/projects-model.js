const db = require('../data/db-config.js');

module.exports = {
    find,
    findResources,
    findTasks,
    findById,
    findProjectById,
    addProject,
    addResource,
    addTask
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

// function findProjectById(id) {
//     return db('projects as p') 
//         // .join('tasks as t', 'p.id', 't.project_id')
//         // .select('p.project_name', 'p.project_description', 'p.project_completed')
//         // .select('t.task_description', 't.task_notes')
//         .where( {id} )
//         .first()
// }

// function findResourcesById(project_id) {
//     return db('resources')
//         .where( 'resources.id', project_id )
//         .first()
// }

function findProjectById(project_id) {
    return db('projects_resources as pr') 
        .join('resources as r', 'pr.resource_id', 'r.id')
        .join('projects as p', 'pr.project_id', 'p.id')
        .join('tasks as t', 'p.id', 't.project_id')
        .select('t.id', 't.task_description', 't.task_notes', 't.task_completed')
        .select('p.id', 'p.project_name', 'p.project_description', 'p.project_completed')
        .select('r.id', 'r.resource_name', 'r.resource_description')
        .where( 't.id', project_id )
        .first()
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return findById(ids[0]);
          });
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            return findById(ids[0]);
          });
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return findById(ids[0]);
          });
}