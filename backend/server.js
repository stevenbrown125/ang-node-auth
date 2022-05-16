const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const messages = [
  { text: 'some text', owner: 'Bib' },
  { text: 'other message', owner: 'bob' },
];

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.listen(4000);
