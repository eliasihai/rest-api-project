let LectureModel = require('../models/lecture.model')
let express = require('express');
let router = express.Router()
let mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('connected to DB lecture!')
);

// Gets back all the lectures
router.get('/lecture/getAll', async(req, res) => {
    try {
        const lecture = await LectureModel.find();

        res.json({
            status: 'ok',
            data: lecture
        })
    } catch (err) {
        res.json({ message: err })
    }
});

// Create a new lecture
// POST localhost:3000/lecture
router.post('/lecture/Insert', async(req, res) => {

    const lecture = new LectureModel({
        date: req.body.date,
        start: req.body.start,
        end: req.body.end,
        title: req.body.title,
        fullName: req.body.fullName,

    });
    try {
        const savedLecture = await lecture.save();
        res.json(savedLecture);
    } catch (err) {
        res.json({ message: err });
    }
});
/*
// Specific lecture
router.get('/lecture/:lectureId', async(req, res) => {
    try {
        const lecture = await LectureModel.findById(req.params.lectureId);
        res.json(lecture);
    } catch (err) {
        res.json({ message: err })
    }
});

// Delete lecture
router.delete('/lecture/:lectureId', async(req, res) => {
    try {
        const removeLecture = await LectureModel.remove({ _id: req.params.lectureId });
        res.json(removeLecture)
    } catch (err) {
        res.json({ message: err });
    }
});*/

module.exports = router