//Create a web servere
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Read the comments from a JSON file
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        // Send the comments as a JSON response
        res.end(data);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
