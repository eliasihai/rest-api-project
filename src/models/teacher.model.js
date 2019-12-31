let mongoose = require('mongoose');
require('dotenv/config');


// mongoose.connect(
//     process.env.DB_CONNECTION,
//     {useNewUrlParser: true},
//     () => console.log('connected to DB!')
// );

let TeacherSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: false
    },
    lastname: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subject: {
        type: String,
        required: true,
        unique: false
    },
    type: {
        type: String,
        required: false,
        unique: false
    }

})

const Teacher = module.exports = mongoose.model('Teacher', TeacherSchema)