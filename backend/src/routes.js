const express = require('express');

const routes = express.Router();

const tweetcontroller = require('./controllers/tweetcontroller');

const likecontroller = require('./controllers/likecontroller');

routes.get('/tweets', tweetcontroller.index);
routes.post('/tweets', tweetcontroller.store);
routes.post('/likes/:id', likecontroller.store);

module.exports = routes;
