const express = require('express');
const { Cohort, Student, User } = require('../models');

const studentController = express.Router();


studentController.get('/', async (req, res) => {
  try {
    const cohorts = await Cohort.findAll();
    res.json(cohorts);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

studentController.get('/students/:student_id', async (req, res) => {
  const student = await Student.findOne ({
    where: {
      id: req.params.student_id
    }
  })
  res.json(student);
});

studentController.get('/:cohort_id', async (req, res) => {
  const students = await Student.findAll ({
    where: {
      cohort_id: req.params.cohort_id
    }
  })
  res.json(students);
});

studentController.post('/:cohort_id/:user_id', async (req, res) => {
  try {
    const cohort = await Cohort.findByPk(req.params.cohort_id);
    const student = await Student.create(req.body);
    const user = await User.findByPk(req.params.user_id);
    console.log(req.body)
    await cohort.addStudent(student)
    await user.addStudent(student)
    res.json(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

studentController.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.update(req.body);
    res.json(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

studentController.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.json(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = studentController;
