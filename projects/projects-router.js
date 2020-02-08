const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
          .then(projects => {
              res.status(200).json(projects);
          })
          .catch(err => {
              res.status(500).json({ error: "The projects information could not be retrieved." });
          })
});

router.get('/resources', (req, res) => {
    Projects.findResources()
          .then(resources => {
              res.status(200).json(resources);
          })
          .catch(err => {
              res.status(500).json({ error: "The resource information could not be retrieved." });
          })
});


router.get('/tasks', (req, res) => {
    Projects.findTasks()
          .then(resources => {
              res.status(200).json(resources);
          })
          .catch(err => {
              res.status(500).json({ error: "The task information could not be retrieved." });
          })
});

router.post('/', validateUser, (req, res) => {
    const newPost = req.body;


    Projects.addProject(newPost)
            .then(post => {
                res.status(201).json(post);
            })
            .catch(err => {
                res.status(500).json({ error: "There was an error while saving the project to the database" });
            })
        
});

// custom middleware

function validateProjectId(req, res, next) {
    const {id} = req.params;
    Projects.getById(id)
      .then(project => {
        if(project) {
          req.project = project;
          next();
        } else {
          res.status(400).json({ message: "invalid project id" });
        }   
      })
      .catch(err => {
        res.status(500).json({message: 'exception error'});
      })
  }
  
  function validateUser(req, res, next) {
    const projectData = req.body;
    if(!projectData) {
      res.status(400).json({ message: "missing project data" });
    } else if (!projectData.project_name) {
      res.status(400).json({ message: 'missing required text field'})
    } else {
      next();
    }
  }

module.exports = router;