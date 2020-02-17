const db = require('../data/db-config.js');

module.exports = {
    find,
    findResources,
    findTasks,
    findById,
    findProjectById,
    addProject,
    addResource,
    addTask,
    findTasksById,
    // findAllProjectById
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

    

    function findProjectById(id) {
        return db('projects_resources as pr')
            .join('projects as p', 'pr.project_id', 'p.id')
            .join('resources as r', 'pr.resource_id', 'r.id')
            .where( 'p.id', id )
        }




function findTasksById(project_id) {
    return db('tasks as t')
       
        .where( { project_id })
}

function findResourcesById (project_id) {
    return db('projects_resources as pr')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .join('projects as p', 'pr.project_id', 'p.id')
        .select('p.project_name', 'r.resource_name')
        .where({project_id})
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