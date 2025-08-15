const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Willkommen beim AR Natur Entdecker!');
});

app.listen(port, () => {
  console.log(`Beispiel-App lauscht auf http://localhost:${port}`);
});