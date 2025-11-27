import express from 'express';
const app = express();

app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint is working!' });
});

// Do NOT use app.listen() — Passenger handles it
export default app;