import DEBUG from 'debug';
import Messages from '../../models/models';

const debug = DEBUG('queries');

const queries = {
  /**
   * 
   * @returns returns the complete list of all messages that are stored in the database
   */
  getMessages: async () => {
    const messageList = await Messages.find();
    debug('Query getMessage, number of message: ', messageList.length);
    return messageList;
  },
  /**
   * 
   * @param {*} _ 
   * @param {String} input  
   * @returns returns a list with all the messages that match the input parameter
   */
  searchMessage: async (_, { input }) => {
    const messageList = await Messages.find();
    const resultList = [];
    messageList.forEach((value) => {
      if (value.text.indexOf(input) !== -1) {
        resultList.push(value);
      }
    });
    debug('Query searchMessage, number of message: ', resultList.length);
    return resultList;
  },
};

export default queries;
