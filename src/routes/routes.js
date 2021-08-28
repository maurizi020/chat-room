const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { mergeTypeDefs, mergeResolvers, makeExecutableSchema } = require('graphql-tools');

const router = express.Router();

const typeDefsMerge = mergeTypeDefs([]);
const resolversMerge = mergeResolvers([]);

const schema = makeExecutableSchema({
    typeDefs: typeDefsMerge,
    resolvers: resolversMerge,
});

router.use('/chats',graphqlHTTP({
    schema,
    graphiql: true,
    extensions: ({ context }) => context.bullJob?.remove(),
}));

module.exports = router;