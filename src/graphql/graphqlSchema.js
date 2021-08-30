import { makeExecutableSchema } from '@graphql-tools/schema';
import queries from './resolvers/queries';
import mutations from './resolvers/mutations';
import { subscription } from './resolvers/subscription';

const resolvers = {
  Query: queries,
  Mutation: mutations,
  Subscription: subscription,
};

const typeDefs = `
  input messageInput {
    userName: String
    timestamp: Float
    message: String
    typography: String
    color: String
  }

  type message {
    userName: String
    timestamp: Float
    message: String
    typography: String
    color: String
  }

  type Query {
    getMessages: [message]
  }

  type Mutation {
    addMessage(input: messageInput): message
  }

  type Subscription{
    newMessage: message
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
