const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// API endpoint
app.post('/sort-string', (req, res) => {
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

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Send POST requests to http://localhost:3000/sort-string');
    console.log('Example:');
    console.log('curl -X POST http://localhost:3000/sort-string \\');
    console.log('  -H "Content-Type: application/json" \\');
    console.log('  -d "{\\"data\\":\\"example\\"}"');
});