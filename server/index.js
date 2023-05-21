const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Use the API routes
app.use('/', apiRoutes);

// Start the server
const port = 5000; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
