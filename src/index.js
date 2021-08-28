const express = require('express');
const debug = require('debug')('index');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = require('./routes/routes');

debug('connect with database:\n');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', router);

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
).then((db) => {
    debug(`db is connect to ${db.connection.host}`);
}).catch((err) => {
    debug("error: ",err);
});

debug('Server listen in port: 3000');

app.listen(3000,() => {
    debug('Server on port: 3000');
});