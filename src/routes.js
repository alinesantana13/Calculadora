const express = require('express');

const routes = express();


routes.get('/', function (require, response) {
    response.render('./index.html');
})

module.exports = routes;