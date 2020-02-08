exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { task_description: "Map out ideas on Whiteboard", task_notes: "Use multicoloured highlighters for added emphasis", task_completed: false, project_id: 1 },
    { task_description: "Code into Computer", task_notes: '', task_completed: false, project_id: 1 },
    { task_description: "Drink coffee", task_notes: '', task_completed: false, project_id: 1 },
    { task_description: "Listen to good music", task_notes: 'something with a beat', task_completed: false, project_id: 1 },
    { task_description: "Pour water in French Press over freshly ground coffee", task_notes: 'medium roast', task_completed: false, project_id: 2 },
    { task_description: "Drink delicious coffee", task_notes: '', task_completed: false, project_id: 2 }
  ]);
};
