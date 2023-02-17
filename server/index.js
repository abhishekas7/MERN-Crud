import express from 'express';
 import '..//server/database/db.js'

const app = express();

const PORT = 8000;



app.listen(PORT,(req,res) => console.log(`Server is running on PORT ${PORT}`));


