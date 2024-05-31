// index.js
const express = require('express');
const mongoose = require('mongoose');
const initDbRoute = require('./routes/initDb');

const app = express();
const port = 3000;
const mongoUri = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api', initDbRoute);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
