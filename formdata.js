const mongoose = require('mongoose');

// Form Data Schema
const formdataschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[\w-\.]+@gmail\.com$/.test(v); 
            },
            message: props => `${props.value} is not a valid Gmail address!`
        }
    },
    phone: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return v.toString().length === 10; 
            },
            message: props => `Phone number must be exactly 10 digits! You entered ${props.value}`
        }
    },
    company: {
        type: String
    },
    message: {
        type: String,
        required:true
    }
});

// Creating a Model for 'formdata'
const Contact = mongoose.model('Contact', formdataschema);

module.exports = Contact;
