import DEBUG from 'debug';
import { randomBytes } from 'crypto';
import { Users } from '../../models/models';

const debug = DEBUG('mutations');
const size = 10;

const mutations = {

  setUser: async (_, { input }) => {
    const dataUser = {
      name: input.name,
      id: randomBytes(64).toString('base64').slice(0, size),
      chats: [],
    };
    const newUser = new Users(dataUser);
    await newUser.save();
    debug('setUser mutation, the new user is: ', newUser);
    return newUser;
  },

};

export default mutations;
