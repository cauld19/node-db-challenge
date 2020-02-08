
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 255).notNullable();
            tbl.string('project_description', 255);
            tbl.boolean('project_completed').notNullable().defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 255).notNullable();
            tbl.string('resource_description');
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_description').notNullable();
            tbl.string('task_notes');
            tbl.boolean('task_completed').notNullable().defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('projects_resources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.primary(['project_id', 'resource_id']);
        })
  )
};

exports.down = function(knex) {
    return (
        knex.schema
            .dropTableIfExists('projects_resources')
            .dropTableIfExists('tasks')
            .dropTableIfExists('resources')
            .dropTableIfExists('projects')
    );
};
