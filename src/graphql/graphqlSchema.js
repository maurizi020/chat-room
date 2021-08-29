import { makeExecutableSchema } from '@graphql-tools/schema';
import queries from './resolvers/queries';
import mutations from './resolvers/mutations';

const resolvers = {
  Query: queries,
  Mutation: mutations,
};

const typeDefs = `

  input userInput {
    name: String
  }

  type message {
    timestamp: Float
    message: String
    typography: String
    color: String
  }

  type chat {
    recipient: String
    messages: [message]
  }

  type user {
    name: String
    chats: [chat]
    id: ID
  }

  type Mutation {
    setUser(input: userInput): user
  }

  type Query {
    getUser(name: String): user
  }

`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
