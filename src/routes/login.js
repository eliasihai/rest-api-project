let TeacherModel = require('../models/teacher.model')
let StudentModel = require('../models/student.model')
let express = require('express');
let router = express.Router()
let mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

// Login a teacher
router.post('/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var type = req.body.type;

    if (type == 'teacher')
        TeacherModel.findOne({ email: email, password: password }, function(err, teacher) {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            if (!teacher) {
                res.json({
                    status: 'error - teacher not found'
                })
                return res.status(404).send();
            } else {
                res.json({
                    status: 'ok',
                    data: teacher
                })
                res.status(200).send();
            }
        })
    else
        StudentModel.findOne({ email: email, password: password }, function(err, student) {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            if (!student) {
                res.json({
                    status: 'error'
                })
                return res.status(404).send();
            } else {
                res.json({
                    status: 'ok',
                    data: student
                })
                res.status(200).send();
            }
        })
})