const express = require('express');
const { Cohorts, Students, Users  } = require('../models');

const studentController = express.Router();

studentController.get('/', async (req, res) => {
  try {
    const cohorts = await Cohorts.findAll();
    res.json(cohorts);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

studentController.post('/', async (req, res) => {
  try {
    const student = await Students.create(req.body);
    res.json(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

studentController.put('/:id', async (req, res) => {
  try {
    const student = await Students.findByPk(req.params.id);
    await student.update(req.body);
    res.json(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

studentController.delete('/:id', async (req, res) => {
  try {
    const student = await Students.findByPk(req.params.id);
    await student.destroy();
    res.json(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = studentController;
