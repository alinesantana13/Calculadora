const express = require('express');
const routes = require('./routes');

const app = express();

//permite usar página estática ex.:HTML
app.use(express.static(__dirname + '/'));

app.use(express.json());
app.use(routes);

app.listen(4000);