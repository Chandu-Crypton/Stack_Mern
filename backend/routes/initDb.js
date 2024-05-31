
const express = require('express');
const axios = require('axios');
const DataModel = require('../models/DataModel');

const router = express.Router();


const thirdPartyApiUrl = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

router.get('/init-db', async (req, res) => {
    try {
        const response = await axios.get(thirdPartyApiUrl);
        const data = response.data;


        await DataModel.deleteMany({});


        await DataModel.insertMany(data);

        res.status(200).send('Database initialized with seed data');
    } catch (error) {
        console.error('Error initializing database:', error);
        res.status(500).send('An error occurred while initializing the database');
    }
});

module.exports = router;
