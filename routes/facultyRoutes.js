const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');
const University = require('../models/University');

router.get('/', async (req, res) => {
  const faculties = await Faculty.find().populate('university').exec();
  res.render('facultyList', { faculties });
});

router.get('/new', async (req, res) => {
  const universities = await University.find();
  res.render('facultyForm', { universities, faculty: null });
});

router.post('/', async (req, res) => {
  const { name, address, university } = req.body;
  const newFaculty = new Faculty({ name, address, university });
  await newFaculty.save();
  res.redirect('/faculties');
});

router.get('/edit/:id', async (req, res) => {
  const faculty = await Faculty.findById(req.params.id);
  const universities = await University.find();
  res.render('facultyForm', { universities, faculty });
});

router.put('/:id', async (req, res) => {
  const { name, address, university } = req.body;
  await Faculty.findByIdAndUpdate(req.params.id, { name, address, university });
  res.redirect('/faculties');
});

router.delete('/:id', async (req, res) => {
  await Faculty.findByIdAndDelete(req.params.id);
  res.redirect('/faculties');
});

module.exports = router;
