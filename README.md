# MERN-Crud
MERN Stack Crud Operation

NOTES


API
----------------------
1. In cilent folder install axios [ npm i axios]

2. Error Handling is done by Try and Catch


Server.js
----------------------------------------
npm init
npm i express


pakage.json
-----------------------
  "scripts":{
    "start": "node index.js", \\added
    "test" : "echo \"Error : no test apecified\" && exit 1"
  },

DB Connection
-------------------------------------------
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/employee').then(()=>{
    console.log('Connected to monogoDB');}).catch((error) => {
    console.log('Not Connected',error);
})

Installing  dot
---------------------------------------
npm i dotenv

creating routes on the server js
---------------------------------------
import express from 'express'

const router = express.Router();

//Endpoints nokit routes create cheyanam [/add]

then export router

Install Cors
----------------------------------------
Error mattan Coros pakage install chayunnu

npm i cors

