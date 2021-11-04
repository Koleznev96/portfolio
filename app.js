const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const authRoute = require('./src/api/auth');
const socialNetworkRoute = require('./src/api/socialNetwork');
const messengerRoute = require('./src/api/messenger');
const adminPanelRoute = require('./src/api/adminPanel');
const portfolioRoute = require('./src/api/portfolio');

const keys = require('./config/keys');
const http = require("http");
const app = express();

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error));

app.use(passport.initialize());
require('./src/middleware/passport')(passport);

app.use(require('morgan')('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRoute);
app.use('/api/social_network', socialNetworkRoute);
app.use('/api/messenger', messengerRoute);
app.use('/api/admin_panel', adminPanelRoute);
app.use('/api/portfolio', portfolioRoute);


const server = http.createServer(app);

module.exports = server;
