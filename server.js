const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/TCC/Izi'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/TCC/Izi/index.html'));
});

app.listen(process.env.PORT || 8080);