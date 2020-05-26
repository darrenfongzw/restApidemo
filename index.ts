const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('console-stamp')(console, 'dd:mmm:yyyy HH:MM:ss.l');
let {url, port} = require('./config.js');
// const uuid = require('uuid');
console.log(process.argv);
if (process.argv[2]) {
    if (process.argv[2] !== 'deploy') {
        //Assume local
        url = 'localhost'
    }
}

app.use(bodyParser.json());
app.use(cors());


app.listen(port || 3210, () => {
    console.log(`Server running on port ${port || 3210}`, `\n and url ${url}`)
});

//test the app is working
app.get("/", (req, res) => {
    console.log('Backend Call');
    res.send('BackendRunning');
});
