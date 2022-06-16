const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/createPeriodicTask', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

app.listen(port, function () {
    console.log(`Node server is running on port ${port}`);
});