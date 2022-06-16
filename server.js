const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const stringify = require('csv-stringify').stringify
const parse = require('csv-parse').parse
const os = require('os')
const multer  = require('multer')
const upload = multer({ dest: os.tmpdir() })
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/post-data', function (req, res) {
    res.send('POST Request');
});

app.post('/read', upload.single('file'), (req, res) => {
    const file = req.file
  
    const data = fs.readFileSync(file.path)
    parse(data, (err, records) => {
      if (err) {
        console.error(err)
        return res.status(400).json({success: false, message: 'An error occurred'})
      }
  
      return res.json({data: records})
    })
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

app.use(bodyParser.json())
app.use(express.static('public'))