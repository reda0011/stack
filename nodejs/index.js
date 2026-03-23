const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello!');
});


app.get('/reda', (req, res) => {
  res.send('hi ggg!');
});


app.post('/postt', (req, res) => {
  res.send('hi Reda!');
});

listener = app.listen(3001, () => {
  console.log('Server is running on port 3001');
});


