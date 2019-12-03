let mongoose = require('mongoose');
require('dotenv/config');


// mongoose.connect(
//     process.env.DB_CONNECTION,
//     {useNewUrlParser: true},
//     () => console.log('connected to DB!')
// );

let TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:false
    },
    last_name: {
        type: String,
        required: true,
        unique:false
    },
    password: {
        type: String,
        required: true,
        unique:false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date_of_birth: {type:Date,unique:false},
    gender: {type:String,unique:false}
})

const Teacher = module.exports = mongoose.model('Teacher', TeacherSchema)