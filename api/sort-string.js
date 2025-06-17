const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

app.post('/api/sort-string', (req, res) => {
    try {
        if (!req.body || typeof req.body.data !== 'string') {
            return res.status(400).json({ 
                error: 'Invalid request. Please provide a JSON object with a "data" field containing a string.' 
            });
        }

        const inputString = req.body.data;
        const sortedChars = inputString.split('').sort();
        res.json({ word: sortedChars });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = app;
