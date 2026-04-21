const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Wael Shortener Running 🚀');
});

app.post('/shorten', (req, res) => {
  const url = req.body.url;
  res.json({
    short: "short.ly/abc123",
    original: url
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
