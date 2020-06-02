const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static('Izi/src/index.html'));

app.get('/*', (req, res) => {
    res.sendFile(path.join('Izi/src/index.html'));
});

app.listen(process.env.PORT || 8080);