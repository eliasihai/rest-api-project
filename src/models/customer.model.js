let mongoose = require('mongoose');
require('dotenv/config');


// mongoose.connect(
//     process.env.DB_CONNECTION,
//     { useNewUrlParser: true },
//     () => console.log('connected to DB!')
// );

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('customer', CustomerSchema)