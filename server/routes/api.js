const express = require('express');
const router = express.Router();

// Define your routes
router.get('/api/example', (req, res) => {
  // Handle the GET request
  res.json({ message: 'API endpoint example' });
});

router.post('/api/example', (req, res) => {
  // Handle the POST request
  res.json({ message: 'API endpoint example' });
});

// Export the router
module.exports = router;
