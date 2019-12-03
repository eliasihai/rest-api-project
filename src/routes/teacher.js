let TeacherModel = require('../models/teacher.model')
let express = require('express');
let router = express.Router()
let mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('connected to DB teachers!')
);

// Gets back all the teachers
router.get('/teacher', async(req, res) => {
    try {
        const teacher = await TeacherModel.find();

        res.json(teacher)
    } catch (err) {
        res.json({ message: err })
    }
});

// Create a new teacher
// POST localhost:3000/teacher
router.post('/teacher', async(req, res) => {

    const teacher = new TeacherModel({
        name: req.body.name,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender
    });
    try {
        const savedTeacher = await teacher.save();
        res.json(savedTeacher);
    } catch (err) {
        res.json({ message: err });
    }
});

// Specific teacher
router.get('/teacher/:teacherId', async(req, res) => {
    try {
        const teacher = await TeacherModel.findById(req.params.teacherId);
        res.json(teacher);
    } catch (err) {
        res.json({ message: eerr })
    }
});

// Delete teacher
router.delete('/teacher/:teacherId', async(req, res) => {
    try {
        const removeTeacher = await TeacherModel.remove({ _id: req.params.teacherId });
        res.json(removeTeacher)
    } catch (err) {
        res.json({ message: err });
    }
});

// Update a teacher
router.patch('/teacher/:teacherId', async(req, res) => {
    let tchr = {};
    if (tchr !== null) {
        tchr.name = req.body.name,
            tchr.last_name = req.body.last_name,
            tchr.password = req.body.password,
            tchr.date_of_birth = req.body.date_of_birth,
            tchr.gender = req.body.gender
    }
    let query = { _id: req.params.teacherId }
    try {
        const updateTeacher = await TeacherModel.update(query, tchr);
        res.json(updateTeacher);
    } catch (err) {
        res.json({ messge: err });
    }
});

module.exports = router