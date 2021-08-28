import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from '../graphql/graphqlSchema';

const router = express.Router();

router.use('/chats', graphqlHTTP({
  schema,
  graphiql: true,
}));

export default router;
