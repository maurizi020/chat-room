import DEBUG from 'debug';
import Messages from '../../models/models';

const debug = DEBUG('queries');

const queries = {
  getMessages: async () => {
    const messageList = await Messages.find();
    debug('Query getMessage', messageList);
    return messageList;
  },
};

export default queries;
