//const express = require('express');
import express from 'express';
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello World!</h1>");
});

app.listen(port, (error) =>{
    if(!error)
        console.log(`Server is running on http://localhost:${port}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);