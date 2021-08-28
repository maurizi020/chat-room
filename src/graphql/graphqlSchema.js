import { makeExecutableSchema } from 'graphql-tools';
import queries from './resolvers/queries';
import mutations from './resolvers/mutations';

const resolvers = {
  Query: queries,
  Mutation: mutations,
};

const typeDefs = `

  input userInput {
    name: String
    id: ID
  }

  type message {
    timestamp: Float
    message: String
    typography: String
    color: String
  }

  type chat {
    recipient: ID
    messages: [message]
  }

  type user {
    name: String
    chats: [chat]
    id: ID
  }

  type Mutation {
    
  }
  type Query {
    
  }

`;

// createUser(input: userInput): user

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
