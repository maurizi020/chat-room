import DEBUG from 'debug';
import { pubsub } from './subscription';
import Messages from '../../models/models';

const debug = DEBUG('mutations');

const mutations = {
  /**
   * 
   * @param {*} _ 
   * @param {Message} input 
   * @returns returns the message saved in the database
   */
  addMessage: async (_, { input }) => {
    const newMessage = new Messages(input);
    await newMessage.save();
    pubsub.publish('chatRoom', { newMessage });
    debug('Mutation addMessage input: ', newMessage);
    return newMessage;
  },
};

export default mutations;
