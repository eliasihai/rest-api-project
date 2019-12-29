let mongoose = require('mongoose');
require('dotenv/config');


let LectureSchema = new mongoose.Schema({
    /*date: {
        type:Date,
        unique:false
    },*/
    start: {
        type: String,
        unique: false
    },
    end: {
        type: String,
        unique: false
    },
    title: {
        type: String,
        unique: false
    },
    fullName: {
        type: String,
        unique: false
    }

})

const Lecture = module.exports = mongoose.model('Lecture', LectureSchema)