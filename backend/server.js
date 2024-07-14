//const express = require('express');
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import studentRouter from './src/routes/students.js'
import loginRouter from './src/routes/login.js';
import registerRouter from './src/routes/register.js';
import { connectToDb } from './db.js';
dotenv.config();
const app = express();
const port = process.env.PORT||3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api/v1/students', studentRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

connectToDb();
app.listen(port, (error) =>{
    if(!error)
        console.log(`Server is running on http://localhost:${port}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);