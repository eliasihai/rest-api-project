let mongoose = require('mongoose');
require('dotenv/config');


// mongoose.connect(
//     process.env.DB_CONNECTION,
//     {useNewUrlParser: true},
//     () => console.log('connected to DB!')
// );

let LectureSchema = new mongoose.Schema({
    date: {
        type:Date,
        unique:false
    },
    hour: {
        type:String,
        unique:false
    }
    //student_code:{},
    //teacher_code:{},
    //subject_code:{}
})

const Lecture = module.exports = mongoose.model('Lecture', LectureSchema)