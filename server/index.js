const express = require('express');
const app = express();
const router = require('./routes/api');

app.use('/', router);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
