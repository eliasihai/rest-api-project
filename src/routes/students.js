let StudentModel = require('../models/student.model')
let express = require('express');
let router = express.Router()
let mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('connected to DB students!')
);

// Gets back all the students
router.get('/student/login12345', async(req, res) => {
    try {
        const student = await StudentModel.find();

        res.json(student)
    } catch (err) {
        res.json({ message: err })
    }
});

// login a admin user
router.post('/student/login', (req, res) => {
    const { email, password } = req.body

    if (email === 'admin' && password === 'admin') {
        res.json({
            status: 'ok'
        })
    } else {
        res.json({
            status: 'error'
        })
    }
});
// Login a student
router.post('/student/login1', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

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

// Register a student
router.post('/student/register', (req, res) => {
    const student = new StudentModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
        type: req.body.type
    });

    student.save()
        .then(data => {
            res.json({
                data,
                status: 'ok'
            })
        })
        .catch(err => {
            res.json({
                message: err,
                status: 'error'
            });
        })
})

router.post('/student/register1', async(req, res) => {

    const student = new StudentModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
        //date_of_birth: req.body.date_of_birth,
        //gender: req.body.gender
    });
    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch (err) {
        res.json({ message: err });
    }
});




/*
router.post('/student/login12', function(req, res) {
    //var email = req.body.email;
    //var password = req.body.password;

    const student = new StudentModel({
        email: req.body.email,
        password: req.body.password
    });

    StudentModel.findOne({ email: email, password: password }, function(err, student) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        if (!student) {
            return res.status(404).send();
        }
        return res.status(200).send();
    })
});


router.get('/student/login', async(req, res) => {
    const student = new StudentModel({
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedStudent = await student.find();
        res.json(savedStudent);
    } catch (err) {
        res.json({ message: err });
    }
});


// Create a new student
// POST localhost:3000/student
router.post('/student', async(req, res) => {

    const student = new StudentModel({
        name: req.body.name,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender
    });
    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/student/register', function(req, res) {

    var name = req.body.name;
    var last_name = req.body.last_name;
    var password = req.body.password;
    var email = req.body.email;
    var date_of_birth = req.body.date_of_birth;
    var gender = req.body.gender;

    var newStudent = new StudentModel();
    newStudent.name = name;
    newStudent.last_name = last_name;
    newStudent.password = password;
    newStudent.email = email;
    newStudent.date_of_birth = date_of_birth;
    newStudent.gender = gender;
    newStudent.save(function(err, savedStudent) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        return res.status(200).send();
    });

});


// Specific student
router.get('/student/:studentId', async(req, res) => {
    try {
        const student = await StudentModel.findById(req.params.studentId);
        res.json(student);
    } catch (err) {
        res.json({ message: eerr })
    }
});

// Delete student
router.delete('/student/:studentId', async(req, res) => {
    try {
        const removeStudent = await StudentModel.remove({ _id: req.params.studentId });
        res.json(removeStudent)
    } catch (err) {
        res.json({ message: err });
    }
});

// Update a student
router.patch('/student/:studentId', async(req, res) => {
    let std = {};
    std.name = req.body.name,
        std.last_name = req.body.last_name,
        std.password = req.body.password,
        std.date_of_birth = req.body.date_of_birth,
        std.gender = req.body.gender

    let query = { _id: req.params.studentId }
    try {
        const updateStudent = await StudentModel.update(query, std);
        res.json(updateStudent);
    } catch (err) {
        res.json({ messge: err });
    }
});
*/
module.exports = router;