//const express = require('express');
import express from 'express';

import studentRouter from './src/routes/students.js'

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/v1/students', studentRouter);

app.listen(port, (error) =>{
    if(!error)
        console.log(`Server is running on http://localhost:${port}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);