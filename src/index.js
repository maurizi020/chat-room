import express from 'express';
import DEBUG from 'debug';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/routes';

const app = express();
const debug = DEBUG('index');

debug('connect with database:\n');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', router);

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then((db) => {
  debug(`db is connect to ${db.connection.host}`);
}).catch((err) => {
  debug('error: ', err);
});

debug(`Server listen in port: ${process.env.SERVER_PORT}`);

app.listen(process.env.SERVER_PORT, () => {
  debug(`Server on port: ${process.env.SERVER_PORT}`);
});
