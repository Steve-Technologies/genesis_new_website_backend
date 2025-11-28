const express = require('express');
const app = express();

app.post('/submit_form', (req, res) => {
  res.json({ message: 'Form submitted successfully!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Genesis New Website Backend!' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
// Do NOT use app.listen() — Passenger handles it
module.exports = app;