const express = require('express');
const debug = require('debug')('index');
const mongoose = require('mongoose');
const app = express();

debug('connect with database:\n');

mongoose.connect(process.env.MONGO_URL).then((db) => {
    debug(`db is connect to ${db.connection.host}`);
}).catch((err) => {
    debug("error: ",err);
});

debug('Server listen in port: 3000');

app.listen(3000,() => {
    debug('Server on port: 3000');
});