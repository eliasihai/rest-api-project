let mongoose = require('mongoose');
require('dotenv/config');


let LectureSchema = new mongoose.Schema({
    teacherID: {
        type: String,
        required: false,
        unique: false
    },
    studentID: {
        type: String,
        required: false,
        unique: false
    },
    teacherName: {
        type: String,
        required: true,
        unique: false
    },
    studentName: {
        type: String,
        required: true,
        unique: false
    },
    date: {
        type: Date,
        unique: false
    },
    start: {
        type: String,
        required: false,
        unique: false
    },
    end: {
        type: String,
        required: false,
        unique: false
    },
    title: {
        type: String,
        required: true,
        unique: false
    },
})

const Lecture = module.exports = mongoose.model('Lecture', LectureSchema)

/*"start": "Fri Dec 20 2019 10:00:00 GMT+0200 (Israel Standard Time)",
            "end": "Fri Dec 20 2019 12:00:00 GMT+0200 (Israel Standard Time)",*/