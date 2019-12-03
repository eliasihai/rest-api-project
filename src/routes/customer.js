let CustomerModel = require('../models/customer.model')
let express = require('express');
let router = express.Router()
let mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('connected to DB customer!')
);

// Gets back all the customers
router.get('/customer', async (req,res) => {
    try{
        const customers = await CustomerModel.find();
        
        res.json(customers)
    } catch (err){
        res.json({message: err})
    }
}); 

// Create a new customer
// POST localhost:3000/customer
router.post('/customer', async (req, res) => {
    const customer = new CustomerModel({
        name: req.body.name,
        email: req.body.email
    });
    try {
        const savedCustomer = await customer.save();
        res.json(savedCustomer);
    } catch (err){
        res.json({message: err});
    }
});

// Specific customer
router.get('/customer/:customerId', async (req,res) => {
    try{
    const customer = await CustomerModel.findById(req.params.customerId);
    res.json(customer);
    } catch  (err){
        res.json({message: eerr})
    }
});

// Delete customer
router.delete('/customer/:customerId', async (req, res) => {
    try{
    const removeCustomer = await CustomerModel.remove({_id: req.params.customerId});
    res.json(removeCustomer)
    } catch (err){
        res.json({message: err});
    }
});

// Update a customer
router.patch('/customer/:customerId', async (req, res) =>{
    try{
        const updateCustomer = await CustomerModel.updateOne(
            {_id: req.params.customerId},
            {$set: {name: req.body.name}}
        ); 
        res.json(updateCustomer);
    } catch (err) {
        res.json({messge: err});
    }
});

module.exports = router
