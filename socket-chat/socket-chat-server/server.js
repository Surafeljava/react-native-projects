const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        Hello: "Hello World"
    })
});

app.get('/chat', (req, res) => {
    res.json({
        message: "Welcome to chat api"
    })
});

app.listen(8080, ()=>{
    console.log('Listening on Port 8080');
});