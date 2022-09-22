const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/hello', (req, res) => {
    res.send('hello');
});

server.listen(PORT, () => {
    console.log('start express server');
});