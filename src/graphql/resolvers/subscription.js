import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const subscription = {
  /**
   * 
   */
  newMessage: {
    subscribe: () => pubsub.asyncIterator('chatRoom'),
  },
};

export {
  subscription,
  pubsub,
};
