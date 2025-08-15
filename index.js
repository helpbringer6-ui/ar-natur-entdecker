const express = require('express');
const app = express();
const port = 3000;

// Set up a simple route that returns a welcome message
app.get('/', (req, res) => {
  res.send('Willkommen beim AR Natur Entdecker!'); // Sends a welcome message to the client
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Beispiel-App lauscht auf http://localhost:${port}`); // Logs the URL the server is listening on
});