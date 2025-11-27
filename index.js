// base backend nodejs server with a test endpoint
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint is working!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});