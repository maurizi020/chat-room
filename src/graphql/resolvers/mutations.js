import DEBUG from 'debug';
import { pubsub } from './subscription';
import Messages from '../../models/models';

const debug = DEBUG('mutations');

const mutations = {
  addMessage: async (_, { input }) => {
    debug('Mutation addMessage input: ', input);
    const newMessage = new Messages(input);
    await newMessage.save();
    pubsub.publish('chatRoom', { newMessage });
    return newMessage;
  },
};

export default mutations;
