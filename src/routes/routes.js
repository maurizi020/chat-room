import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { mergeTypeDefs, mergeResolvers, makeExecutableSchema } from 'graphql-tools';

const router = express.Router();

const typeDefsMerge = mergeTypeDefs([]);
const resolversMerge = mergeResolvers([]);

const schema = makeExecutableSchema({
  typeDefs: typeDefsMerge,
  resolvers: resolversMerge,
});

router.use('/chats', graphqlHTTP({
  schema,
  graphiql: true,
  extensions: ({ context }) => context.bullJob?.remove(),
}));

export default router;
