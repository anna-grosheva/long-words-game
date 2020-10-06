const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.listen(3030, () => {
    console.log('Server is running!');
});