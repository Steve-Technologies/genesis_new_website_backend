import express from 'express';
const app = express();

app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint is working!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Genesis New Website Backend!' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
// Do NOT use app.listen() — Passenger handles it
export default app;