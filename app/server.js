const express = require('express');
const app = express();
app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  items.push(req.body);
  res.status(201).json({ message: 'Item added' });
});

app.delete('/items/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < items.length) {
    items.splice(index, 1);
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(3000, () => {
  console.log('Some changes for dummy push Server running and on http://localhost:3000');
});
