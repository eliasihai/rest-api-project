let mongoose = require('mongoose');
require('dotenv/config');


// mongoose.connect(
//     process.env.DB_CONNECTION,
//     {useNewUrlParser: true},
//     () => console.log('connected to DB!')
// );

let StudentSchema = new mongoose.Schema({
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
    type: {
        type: String,
        required: true,
        unique: false
    }
    /*date_of_birth: {
        type: Date,
        unique: false
    },
    gender: {
        type: String,
        unique: false
    }*/
})

const Student = module.exports = mongoose.model('Student', StudentSchema)