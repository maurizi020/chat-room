import DEBUG from 'debug';
import { pubsub } from './subscription';
import Messages from '../../models/models';

const debug = DEBUG('mutations');

const mutations = {
  addMessage: async (_, { input }) => {
    const newMessage = new Messages(input);
    await newMessage.save();
    pubsub.publish('chatRoom', { newMessage });
    debug('Mutation addMessage input: ', newMessage);
    return newMessage;
  },
};

export default mutations;
