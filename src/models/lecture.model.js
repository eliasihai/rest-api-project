let mongoose = require('mongoose');
require('dotenv/config');


let LectureSchema = new mongoose.Schema({
    /*date: {
        type:Date,
        unique:false
    },*/
    start: {
        type: String,
        required: true,
        unique: false
    },
    end: {
        type: String,
        required: true,
        unique: false
    },
    title: {
        type: String,
        required: true,
        unique: false
    },
    fullName: {
        type: String,
        required: true,
        unique: false
    }

})

const Lecture = module.exports = mongoose.model('Lecture', LectureSchema)