import express from 'express';
import DEBUG from 'debug';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import schema from './graphql/graphqlSchema';
import router from './routes/routes';

const debug = DEBUG('index');

// Create express server
const app = express();

// Create WebSocket listener server
const websocketServer = createServer((_request, response) => {
  response.writeHead(404);
  response.end();
});

// Bind it to port and start listening
websocketServer.listen(process.env.WS_PORT, () => debug(
  `Websocket Server is now running on http://localhost:${process.env.WS_PORT}`,
));

SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server: websocketServer,
    path: '/chats',
  },
);

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
