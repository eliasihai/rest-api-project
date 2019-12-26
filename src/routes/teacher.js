let TeacherModel = require('../models/teacher.model')
let express = require('express');
let router = express.Router()
let mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('connected to DB teachers!')
);

// Gets back all the teachers
router.get('/teacher', async(req, res) => {
    try {
        const teacher = await TeacherModel.find();

        res.json(teacher)
    } catch (err) {
        res.json({ message: err })
    }
});


// Login a teacher
router.post('/teacher/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

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
})

router.post('/teacher/searchBySubject', function(req, res) {
    var subject = req.body.subject;

    TeacherModel.find({ subject: subject }, function(err, teacher) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        if (!teacher) {
            res.json({
                status: 'error'
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
})

// Register a teacher
router.post('/teacher/register', (req, res) => {
    const teacher = new TeacherModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
        subject: req.body.subject,
    });

    teacher.save()
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


// Create a new teacher
// POST localhost:3000/teacher
router.post('/teacher/register1', async(req, res) => {

    const teacher = new TeacherModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
    });
    try {
        const savedTeacher = await teacher.save();
        res.json(savedTeacher);
    } catch (err) {
        res.json({ message: err });
    }
})

// Get teachers by subject
router.get('/teacher/:subject', async(req, res) => {
    try {
        const teachers = await TeacherModel.find(req.params.subject);
        res.json({
            status: 'ok',
            data: teacher
        })
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/teacher/getBySubject', function(req, res) {
    var subject = req.body.subject;

    TeacherModel.find({ subject: subject }, function(err, teacher) {
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
});



// Gets back all the teachers by subject
router.get('/teacher/AllTeachers', async(req, res) => {
    try {
        const teacher = await TeacherModel.find();

        res.json({
            status: 'ok',
            data: teacher
        })
    } catch (err) {
        res.json({ message: err })
    }
});
/*
    // Specific teacher
    router.get('/teacher/:teacherId', async(req, res) => {
        try {
            const teacher = await TeacherModel.findById(req.params.teacherId);
            res.json(teacher);
        } catch (err) {
            res.json({ message: eerr })
        }
    });

    // Delete teacher
    router.delete('/teacher/:teacherId', async(req, res) => {
        try {
            const removeTeacher = await TeacherModel.remove({ _id: req.params.teacherId });
            res.json(removeTeacher)
        } catch (err) {
            res.json({ message: err });
        }
    });

    // Update a teacher
    router.patch('/teacher/:teacherId', async(req, res) => {
        let tchr = {};
        if (tchr !== null) {
            tchr.name = req.body.name,
                tchr.last_name = req.body.last_name,
                tchr.password = req.body.password,
                tchr.date_of_birth = req.body.date_of_birth,
                tchr.gender = req.body.gender
        }
        let query = { _id: req.params.teacherId }
        try {
            const updateTeacher = await TeacherModel.update(query, tchr);
            res.json(updateTeacher);
        } catch (err) {
            res.json({ messge: err });
        }
    });
    */
module.exports = router