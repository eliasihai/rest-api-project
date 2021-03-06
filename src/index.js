let express = require('express');
let app = express();
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');
let studentRoute = require('./routes/students');
let lectureRoute = require('./routes/lecture');
let teacherRoute = require('./routes/teacher');
let loginRoute = require('./routes/loginUser');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    //res.send('')
    next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(studentRoute);
app.use(lectureRoute);
app.use(teacherRoute);
app.use(loginRoute);
app.use(express.static('public'));

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('We think we are lost!');
});

// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'))
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));