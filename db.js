const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/form';

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Handle connection events
const db = mongoose.connection;
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.once('open', () => {
    console.log('MongoDB connection established successfully');
});

module.exports = db;
