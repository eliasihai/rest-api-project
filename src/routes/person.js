let express = require('express');
let router = express.Router();

// QueryString => query property on the request object
// localhost:3000/person?name=Hai&age=20 -- additional key calues here by adding an & when age=20
router.get('/person', (req, res)=> {
    if (req.query.name){
        res.send(`You have requested a person ${req.query.name}`)
    }
    else{
        res.send('You have requested a person')
    }
})

// Param property on  the request object
// localhost:3000/person?Hai
router.get('/person/:name', (req, res)=> {
    res.send(`You have requested a person ${req.params.name}`)
})

router.get('/error', (req,res) => {
    throw new Error('This is a forced error.')
})

module.exports = router;