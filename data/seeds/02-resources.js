exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    {
      resource_name: "Computer",
      resource_description: 'Mac or PC',
    },
    {
      resource_name: "Whiteboard",
      resource_description: 'To map out thoughts',
    },
    {
      resource_name: "Coffee",
      resource_description: 'For focus and pleasure',
    },
    {
      resource_name: "Music",
      resource_description: 'For the energy',
    },
    {
      resource_name: "Boiling water",
      resource_description: 'For the coffee',
    }
  ]);
};
