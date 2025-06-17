const express = require('express');
const cors = require('cors');

module.exports = (req, res) => {
    const app = express();
    
    // Enable CORS
    app.use(cors());
    app.use(express.json());
    
    // Handle POST requests
    if (req.method === 'POST') {
        try {
            if (!req.body || typeof req.body.data !== 'string') {
                return res.status(400).json({ 
                    error: 'Invalid request. Please provide a JSON object with a "data" field containing a string.' 
                });
            }

            const inputString = req.body.data;
            const sortedChars = inputString.split('').sort();
            return res.json({ word: sortedChars });
        } catch (error) {
            console.error('Error processing request:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    
    // Handle other HTTP methods
    return res.status(405).json({ error: 'Method not allowed' });
};
