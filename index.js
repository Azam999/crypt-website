const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.port || 5000;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.log("server started on port: " + PORT));