import express from 'express';
import '..//server/database/db.js'
import dotenv from 'dotenv';
import Routes from './routes/routes.js';
import cors from 'cors';



const app = express();

dotenv.config();



const PORT = 8000;
app.use(cors());
app.use('/',Routes)

app.listen(PORT,(req,res) => console.log(`Server is running on PORT ${PORT}`));


