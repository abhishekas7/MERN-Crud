const express = require('express');
const router = express.Router();

router.get('/api/example', (req, res) => {
  res.json({ message: 'API endpoint example' });
});

router.post('/api/example', (req, res) => {
  res.json({ message: 'API endpoint example' });
});

module.exports = router;
