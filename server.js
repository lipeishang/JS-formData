/**
 * Created by lipeishang on 17-8-13.
 */
const path = require('path');
const express = require('express');

const app = new express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

var multipart = require('connect-multiparty');

var multipartMiddleware = multipart();
app.post('/register', multipartMiddleware, function(req, res) {
    console.log('get FormData Params: ', req.body);
});

app.listen(3000, () => {
    console.log('server started at http://localhost:3000');
});

module.exports = app;