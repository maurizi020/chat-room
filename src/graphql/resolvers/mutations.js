import DEBUG from 'debug';

const debug = DEBUG('mutations');

const mutations = {

  setUser: (_, { input }) => {
    debug('setUser mutation: ', input);
    return input;
  },

};

export default mutations;
