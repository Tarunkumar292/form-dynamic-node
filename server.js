const express = require('express');
const app = express();
//database
const db = require('./db'); 
const Contact = require('./formdata');
//Schema

//Body parser (this is now built into Express)
app.use(express.json());

// POST function
app.post('/postdata', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Contact(data); 
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

// GET method
app.get('/getdata', async (req, res) => {
    try {
        const response = await Contact.find(); 
        console.log("Data fetched");
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server on port 3000");
});
