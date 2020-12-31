const express = require("express");
require('dotenv').config();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");
const http = require('http');
const routes = require('./routes/index');

const app = express();
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/', routes);

const port = process.env.PORT || 5000;

http.createServer(app).listen(port, () => {
    console.log(`Server running on port ${port}`);
});