exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { project_name: 'DB-Challange', project_description: 'Design and build a Data Model and a RESTful API that stores data into a Relational Database', project_completed: false },
    { project_name: 'Make Coffee', project_description: 'Prepare coffee', project_completed: false}
  ]);
};
