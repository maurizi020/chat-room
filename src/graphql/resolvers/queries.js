import DEBUG from 'debug';
import Messages from '../../models/models';

const debug = DEBUG('queries');

const queries = {
  getMessages: () => {
    debug('Query getMessage');
    return Messages.find();
  },
};

export default queries;
