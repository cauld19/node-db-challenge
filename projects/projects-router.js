const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
          .then(posts => {
              res.status(200).json(posts);
          })
          .catch(err => {
              res.status(500).json({ error: "The projects information could not be retrieved." });
          })
});

router.get('/resources', (req, res) => {
    Projects.findResources()
          .then(posts => {
              res.status(200).json(posts);
          })
          .catch(err => {
              res.status(500).json({ error: "The resource information could not be retrieved." });
          })
});



module.exports = router;