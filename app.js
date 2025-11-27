// base backend nodejs server with a test endpoint
import express from 'express';
const app = express();

app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint is working!' });
});
