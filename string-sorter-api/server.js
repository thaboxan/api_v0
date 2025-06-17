const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint for string processing
app.post('/sort-string', (req, res) => {
    try {
        // Check if the request body contains the 'data' field
        if (!req.body || typeof req.body.data !== 'string') {
            return res.status(400).json({ 
                error: 'Invalid request. Please provide a JSON object with a "data" field containing a string.' 
            });
        }

        const inputString = req.body.data;
        
        // Convert string to array of characters, sort them, and create the response
        const sortedChars = inputString.split('').sort();
        
        res.json({ word: sortedChars });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});